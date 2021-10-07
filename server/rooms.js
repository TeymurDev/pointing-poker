const { get } = require('http');
const { nanoid } = require('nanoid');

const rooms = {};

function createRoom(master) {
  const room = { id: nanoid(), master, users: [] };
  rooms[room.id] = room;
  return room;
}

function getRoom(id) {
  return rooms[id];
}

function hasRoom(id) {
  return !!getRoom(id);
}

function joinUser(roomId, user) {
  if (!hasRoom(roomId)) {
    throw new Error(`Can't join user to the room. Room with ID "${roomId}" not found`);
  }

  const room = rooms[roomId];
  room.users.push(user);
  
  return room;
}

function kickUser(roomId, userId) {
  if (!hasRoom(roomId)) {
    throw new Error(`Can't kick user from the room. Room with ID "${roomId}" not found`);
  }

  const room = rooms[roomId];
  // remove user from the room

  return room;
}

module.exports = {
  createRoom,
  getRoom,
  hasRoom,
  joinUser,
  kickUser,
};
