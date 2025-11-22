import express from "express";
import cors from "cors";
import multer from "multer";
import http from 'http'
import route from "./index.js";
import { createClient } from "@supabase/supabase-js";
import { setupWebSocket } from "./websocket.js";

const app = express();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
});

export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

app.use(cors({}));

app.use(express.json());

app.use("/api/v1", route(upload, supabase));

const server = http.createServer(app);

setupWebSocket(server);

server.listen(3000, () => {
  console.log("backend is running on port 3000");
});
