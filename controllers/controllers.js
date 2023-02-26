// Import the controllers for the users
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("./userControllers");

// Import the controllers for the thoughts
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
} = require("./thoughtControllers");

// Import the controllers for the reactions
const { createReaction, deleteReaction, getReaction } = require("./reactionControllers");

// Export all controller functions to be used elsewhere
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
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
  getReaction
};
