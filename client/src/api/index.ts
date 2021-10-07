import io from 'socket.io-client';

const port = 8000;
const serverEndpoint = `http://localhost:${port}`;

export const socket = io(serverEndpoint, {
  transports: ['websocket'],
});

const subscribeToConnection = () => {
  socket.on('connect', () => {
    console.log(`Socket id: ${socket.id} connected`);
  });
};

export default subscribeToConnection;
