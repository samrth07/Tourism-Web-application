
import express from 'express'
import { acceptRequest, addFriend  , getAllfriend } from '../routeHandlers/friendHandler.js';
import { middleware } from '../utils/middleware.js';

export const friendRouter = express.Router();

friendRouter.use(middleware);

// get All friends

friendRouter.get('/' , getAllfriend);

// send friend request

friendRouter.post('/:reqRecieverId' , addFriend);

// remove the friend

// friendRouter.delete('/' , removeFriend);

// accept friend request

friendRouter.patch('/:senderId' , acceptRequest);
