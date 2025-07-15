import express from 'express';
import userRouter from './routes/userRoute.js';
import chatRouter from './routes/chatRoutes.js'
import travelRouter from './routes/travelRoutes.js';
import cors from 'cors'


const app = express();
app.use(cors());
app.use(express.json());

app.use('/user', userRouter);
app.use('/chat', chatRouter);
app.use('/plans', travelRouter);


app.listen(3000 , () => {
    console.log("backend is ruuning on port 3000")
});