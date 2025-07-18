import express from 'express';
import {getMyRooms, getUsers, signin, signup } from "../routeHandlers/userHandler.js"
import { middleware } from '../utils/middleware.js';

let userRouter = express.Router();
 
userRouter.post('/signup', signup);
userRouter.post('/signin', signin);


userRouter.use(middleware);
userRouter.get('/getUsers' , getUsers);
userRouter.get('/rooms', getMyRooms);

export default userRouter;