const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("./userControllers");

const {
  getAllThoughts,
  getThoughtById,
  createThought,
//   updateThought,
//   deleteThought,
} = require("./thoughtControllers");

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
    removeFriend,
    getAllThoughts,
  getThoughtById,
};
