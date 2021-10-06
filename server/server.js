const express = require("express");
const app = express();
const socket = require("socket.io");
const color = require("colors");
const cors = require("cors");

const { createUser, getUserById, removeUser } = require("./user");
const { createRoom, joinUser, kickUser, hasRoom } = require("./rooms");

app.use(express());

const PORT = process.env.PORT || 8000;

app.use(cors());

app.get('/rooms/:id/validate', (req, res) => {
  const { id } = req.params;

  if (hasRoom(id)) {
    res.status(200).send();
  } else {
    res.status(404).send();
  }
});

const server = app.listen(
    PORT,
    () => console.log(`Server is running on the port: ${(PORT)} `.green)
);

const io = socket(server, {
    cors: {
        origin: '*',
    }
});

io.on("connection", (socket) => {
    socket.on("connectON", ((props)=>{
        console.log(props)
    }))

    socket.on("createRoom", ({ firstName, lastName, position, image }) => {
      const master = createUser(firstName, lastName, position, image);
      const room = createRoom(master);
      socket.join(room.id);
      console.log(room.id);
    });

    socket.on("joinRoom", ({ firstName, lastName, position, image, roomId }) => {
      const user = createUser(firstName, lastName, position, image);
      
      try {
        joinUser(roomId, user);
        socket.join(roomId);
      } catch (e) {
        // throw error
      }
    });

    socket.on("chat", (text) => {
        //gets the room user and the message sent
        const user = getUserById(socket.id);

        io.to(user.roomId).emit("message", {
            userId: user.id,
            username: user.username,
            text: text,
        });
    });

    socket.on("disconnect", ({ roomId, userId }) => {
        removeUser(userId);
        kickUser(roomId, userId);
        socket.leave(roomId);

        // if (user) {
        //     io.to(user.roomId).emit("message", {
        //         userId: user.id,
        //         username: user.username,
        //         text: `${user.username} has left the chat`,
        //     });
        // }
    });
});