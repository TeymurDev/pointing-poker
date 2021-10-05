const express = require("express");
const app = express();
const socket = require("socket.io");
const color = require("colors");
const cors = require("cors");

const { joinUser, getUserById, disconnectUser } = require("./user");
const { joinMaster, getMasterById, disconnectMaster } = require("./master");

app.use(express());

const port = 8000;

app.use(cors());

const server = app.listen(
    port,
    () => console.log(`Server is running on the port: ${(port)} `.green)
);

const io = socket(server, {
    cors: {
        origin: '*',
    }
});

io.on("connection", (socket) => {
    socket.on("connect", ((props)=>{
        console.log(props)
    }))

    // master creates and joins new room
    socket.on("createRoom", ({ firstName, lastName, position, image }) => {
      const master = joinMaster(socket.id, firstName, lastName, position, image, socket.id);
      console.log(socket.id, "=id");
      socket.join(master.roomId);
    });

    // user joins the specific room
    socket.on("joinRoom", ({ firstName, lastName, position, image, roomid }) => {
        const user = joinUser(socket.id, firstName, lastName, position, image, roomid);
        console.log(socket.id, "=id");
        socket.join(user.roomId); // проверка комнаты на клиенте??
    });

    // user sending message
    socket.on("chat", (text) => {
        //gets the room user and the message sent
        const user = getUserById(socket.id);

        io.to(user.roomId).emit("message", {
            userId: user.id,
            username: user.username,
            text: text,
        });
    });

    // when the user exits the room
    socket.on("disconnect", () => {
        // the user is deleted from array of users and a left roomId message displayed
        const user = disconnectUser(socket.id);

        if (user) {
            io.to(user.roomId).emit("message", {
                userId: user.id,
                username: user.username,
                text: `${user.username} has left the chat`,
            });
        }
    });
});