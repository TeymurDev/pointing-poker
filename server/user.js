const { nanoid } = require('nanoid');

const users = {};

function createUser(firstName, lastName, position, image) {
  const user = { 
    id: nanoid(), 
    firstName, 
    lastName, 
    position, 
    image, 
  };

  users[user.id] = user;

  return user;
}

function getUserById(id) {
  return users[id];
}

function removeUser(id) {
  delete users[id];
}

module.exports = {
  createUser,
  getUserById,
  removeUser,
};
