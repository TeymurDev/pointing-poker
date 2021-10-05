import io from 'socket.io-client';

const port = 5000;
const socket = io(`http://localhost:${port}`);

const subscribeToConnection = () => {
  socket.on('connect', () => {
    console.log(`Socket id: ${socket.id} connected`);
  });
};

export default subscribeToConnection;
