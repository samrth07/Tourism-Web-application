import { Router } from "express";
import {
  accept,
  addFriend,
  removeFriend,
  getAllFriend,
  getPendingRequest,
  getNotAccepeted,
} from "../routeHandlers/friendHandler.js";
import { middleware } from "../utils/middleware.js";

export const friendRouter = Router();

friendRouter.use(middleware);

friendRouter.get("/", getAllFriend);

friendRouter.post("/:receiverId", addFriend);
friendRouter.patch("/:senderId", accept);
friendRouter.delete("/:friendID", removeFriend);

// get pending request
friendRouter.get("/pendingRequest", getPendingRequest);

// get not accpeted reuest
friendRouter.get("/notAccepeted", getNotAccepeted);
