import { addMessage,
  editMessage, 
  deleteMessage,
  clearRoomMessages,
  getRoomMessages, 
  getMessage
} from "../../prisma/services/messageService.js";
import { logger } from "../utils/logger.js";
import { rooms, broadcastToRoom, isUserInRoom } from "../utils/roomManager.js";

export const handleMessageEvent = async (socket,message,userId) => {
  try {
    const { type, room, content } = message;

    // Check if the room exists in memory
    if (!room || !rooms[room]) {
      logger.warn(`Message event received for non-existent room: ${room}`);
      return;
    }

    // Check if user is in the room
    if (!isUserInRoom(socket, room)) {
      logger.warn(`User ${userId} is not in room ${room}. Ignoring event.`);
      return;
    }

    switch (type) {
      case "message:add":

        try {
          await addMessage(room, userId, content);
          logger.info(
            `User ${userId} sent a message in room ${room}`
          );
          broadcastToRoom(
            room,
            { type: "message:add", userId, data: content },
            socket
          );
        } 
        catch (dbError) {
          logger.error(`Database error while sending a message: ${dbError}`);
          return;
        }
        break;

      case "message:delete":
        try {
          
          if (!message.messageId) {
          logger.warn(`Delete event received without message ID.`);
          return;
        }
          const messageId = message.messageId;
          const savedMessage = await getMessage(messageId);
          if (!savedMessage) {
            logger.warn(`Message ${message.messageId} not found in room ${room}`);
            return;
          }

          await deleteMessage(messageId);
          logger.info(`User ${userId} deleted message ${message.messageId} in room ${room}`);

          broadcastToRoom(
            room,
            {
              type: "message:delete",
              userId,
              messageId,
            },
            socket
          );
        } 
        catch (dbError) {
          logger.error(`Database error while editing message: ${dbError}`);
        }
        break;

      case "message:edit": {
        const messageId = message.messageId;
        if (!messageId) {
          logger.warn(`Edit event received without message ID.`);
          return;
        }

        try {
          const savedMessage = await getMessage(messageId);
          if (!savedMessage) {
            logger.warn(`Message ${messageId} not found in room ${room}`);
            return;
          }

          const editedMessage = await editMessage(messageId, content);
          logger.info(
            `User ${userId} updated message ${messageId} in room ${room}`
          );

          broadcastToRoom(
            room,
            {
              type: "message:edit",
              userId,
              messageId,
              content,
            },
            socket
          );
        }
         catch (dbError) {
          logger.error(`Database error while editing message: ${dbError}`);
        }
        break;
      }

      default:
        logger.warn(`Unknown message event type: ${type}`);
    }
  }
  catch (error) {
    logger.error(`Unexpected error handling message event: ${error}`);
  }
};