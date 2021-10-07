const express = require("express");
const app = express();
const socket = require("socket.io");
const color = require("colors");
const cors = require("cors");

const { createUser, getUserById, removeUser } = require("./user");
const { createRoom, joinUser, kickUser, getRoom, hasRoom } = require("./rooms");

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

app.get('/rooms/:id/users', (req, res) => {
  const { id } = req.params;
  const room = getRoom(id);
  if (!room) {
    res.status(404).send();
  } else {
    res.status(200).json({
      master: room.master,
      users: room.users,
    });
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
      const master = createUser('master', firstName, lastName, position, image);
      const room = createRoom(master);
      socket.join(room.id);
      socket.emit('createRoomResponse', room.id);
    });

    socket.on("joinRoom", ({ gameRole, firstName, lastName, position, image, roomId }) => {
      const user = createUser(gameRole, firstName, lastName, position, image);
      try {
        joinUser(roomId, user);
        socket.join(roomId);
        socket.emit('joinRoomResponse', roomId);
      } catch (e) {
        console.error(e);
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
        try {
          kickUser(roomId, userId);
          socket.leave(roomId);
        } catch (err) {
          // handle error
          console.error(err);
        }

        // if (user) {
        //     io.to(user.roomId).emit("message", {
        //         userId: user.id,
        //         username: user.username,
        //         text: `${user.username} has left the chat`,
        //     });
        // }
    });
});