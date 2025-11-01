import express from 'express';
import userRouter from './routes/userRoute.js';
import chatRouter from './routes/chatRoutes.js'
import travelRouter from './routes/travelRoutes.js';
import { friendRouter } from './routes/friendRouter.js';



export default function route( upload , supabase){
 const router = express.Router();

 router.use('/user', userRouter(upload , supabase));
 router.use('/chat', chatRouter);
 router.use('/plans', travelRouter(upload , supabase));
 router.use('/friend' , friendRouter);

 return router;

}




