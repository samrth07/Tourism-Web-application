import express from 'express';
import { getMessages } from "../routeHandlers/userHandler.js"
import { middleware } from './middleware.js';

const chatRouter = express.Router();

chatRouter.use(middleware);

chatRouter.get('/:roomId', getMessages);