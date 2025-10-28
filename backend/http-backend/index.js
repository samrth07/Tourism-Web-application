import express from 'express';
import userRouter from './routes/userRoute.js';
import chatRouter from './routes/chatRoutes.js'
import travelRouter from './routes/travelRoutes.js';
import cors from 'cors'
import { friendRouter } from './routes/friendRouter.js';


const app = express();
app.use(cors({
    origin : '*'
}));
app.use(express.json());

app.use('/user', userRouter);
app.use('/chat', chatRouter);
app.use('/plans', travelRouter);
app.use('/friend' , friendRouter);


app.listen(3000 , () => {
    console.log("backend is running on port 3000")
});
