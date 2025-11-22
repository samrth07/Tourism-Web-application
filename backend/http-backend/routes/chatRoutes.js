import express from 'express';
import { getMessage, seenMessage } from '../routeHandlers/chatHandler.js';
import { middleware } from '../utils/middleware.js';

const chatRouter = express.Router();

chatRouter.use( middleware );

chatRouter.patch('/:conversationId/seen' , seenMessage);
chatRouter.get('/:conversationId' , getMessage);

export default chatRouter
