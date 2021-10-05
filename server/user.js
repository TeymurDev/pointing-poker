const users = [];

// joins the user to the specific room
function joinUser(id, firstName, lastName, position, image, roomId) {
  const user = { id, firstName, lastName, position, image, roomId };

  users.push(user);
  console.log(users, 'users');

  return user;
}

function getUserById(id) {
  return users.find((user) => user.id === id);
}

function disconnectUser(id) {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

module.exports = {
  joinUser: joinUser,
  getUserById: getUserById,
  disconnectUser: disconnectUser,
};
