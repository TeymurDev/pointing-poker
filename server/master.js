const masters = [];

// joins the master to the new room
function joinMaster(id, firstName, lastName, position, image, roomId) {
  const master = { id, firstName, lastName, position, image, roomId };

  masters.push(master);
  console.log(masters, 'masters');

  return master;
}

function getMasterById(id) {
  return masters.find((master) => master.id === id);
}

function disconnectMaster(id) {
  const index = masters.findIndex((master) => master.id === id);

  if (index !== -1) {
    return masters.splice(index, 1)[0];
  }
}

module.exports = {
  joinMaster: joinMaster,
  getMasterById: getMasterById,
  disconnectMaster: disconnectMaster,
};
