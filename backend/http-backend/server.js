import express from 'express';
import cors from 'cors'
import multer from 'multer'
import route from './index.js';
import { createClient } from "@supabase/supabase-js";

const app = express();

const upload = multer({ storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }
});


export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)



app.use(cors({
    
}));

app.use(express.json());

app.use('/api/v1' ,  route(upload , supabase));

app.listen(3000 , () => {
    console.log("backend is running on port 3000")
});
