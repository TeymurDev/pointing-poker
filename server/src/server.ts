import * as express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const port: number = 5000;
const corsOrigin = "http://localhost:3000";

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: corsOrigin,
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log(`Socket id: ${socket.id} connected`);
});

httpServer.listen(port, () => {
  console.log(`listening on port ${port}`);
});
