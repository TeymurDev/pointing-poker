const { nanoid } = require('nanoid');

const users = {};

function createUser(gameRole, firstName, lastName, position, image) {
  if (gameRole !== 'master') {
    gameRole = gameRole ? 'member' : 'observer';
  }

  const user = {
    id: nanoid(),
    gameRole,
    firstName,
    lastName,
    position,
    image,
  };

  users[user.id] = user;
  console.log(users);

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
