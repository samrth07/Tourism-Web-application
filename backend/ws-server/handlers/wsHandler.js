import { getToken } from "../services/auth.js";
import { authenticateWebSocket } from "../services/getToken.js";
import {
  handleRoomEvent,
  handleUserDisconnect,
} from "./roomHandler.js";
import { handleMessageEvent } from "./messageHandler.js";
import { logger } from "../utils/logger.js";
import { PORT } from "../config.js";

export const setupWebSocketServer = async (wss) => {
  wss.on("connection", async(socket, request) => {
    const url = request.url;
    if (!url) {
      logger.error("Connection request missing URL");
      socket.close();
      return;
    }

    const token = getToken(url);
    console.log(token);
    const authenticatedUser = await authenticateWebSocket(token);

    if (!authenticatedUser) {
      logger.warn("Unauthorized WebSocket connection attempt");
      socket.close();
      return;
    }

    logger.info(authenticatedUser);
    socket.userId = authenticatedUser.id;
    logger.info(`User with userId ${socket.userId} connected`);
    logger.debug(socket.userId);

    // Handle incoming messages
 
    socket.on("message", (data) => {
      try {
        const raw = data?.toString?.() || "No message received";
        const message = JSON.parse(raw);

        switch (message.type) {
          case "room:join":
          case "room:leave":
            handleRoomEvent(socket, message, socket.userId);
            break;

          case "message:add":
          case "message:delete":
          case "message:edit":
            handleMessageEvent(socket, message, socket.userId);
            break;

          default:
            logger.warn(`Unknown message type received: ${message.type}`);
        }
      } catch (error) {
        logger.error("Invalid message format", error);
      }
    });

    // Handle disconnection
    socket.on("close", () => {
      logger.info(`User ${socket.userId} disconnected`);
      handleUserDisconnect(socket, socket.userId); // uses userId to fully clean up rooms
    });
  });

  wss.on("listening", () => {
    logger.info(`WebSocket server is running on ws://localhost:${PORT}`);
  });
};