const { User, Thought } = require("../models/models");

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().populate("thoughts friends");
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get a single user by ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate(
      "thoughts friends"
    );
    if (!user) {
      res.status(404).json({ message: "No user found with this id!" });
      return;
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Create a user
const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
};

// Update a user by ID
const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) {
      res.status(404).json({ message: "No user found with this id!" });
      return;
    }

    // Update the username for all the user's thoughts
    await Thought.updateMany(
      { username: user.username },
      { $set: { username: req.body.username } }
    );

    res
      .status(200)
      .json({ message: `Successfully updated user with id:${req.params.id}` });
  } catch (err) {
    res.status(500).json(err);
  }
};

// Delete a user by ID
const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).json({ message: "No user found with this id!" });
      return;
    }

    // Delete all of the user's thoughts
    await Thought.deleteMany({ username: user.username });

    // Delete the user
    await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: `Delete successful: deleted user with id:${req.params.id} and associated thoughts if applicable.`,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

// Add a friend
const addFriend = async (req, res) => {
  try {
    // Find the user and friend by their ids
    const user = await User.findById(req.params.userId);
    const friend = await User.findById(req.params.friendId);

    // If either the user or friend is not found, return a 404 error
    if (!user || !friend) {
      return res.status(404).json({ message: "User or friend not found" });
    }

    // If the user's friend list already includes the friend, return a 400 error
    if (user.friends.includes(friend._id)) {
      return res
        .status(400)
        .json({ message: "User is already friends with this person" });
    }

    // Add the friend to the user's friend list
    user.friends.push(friend);

    // Save the updated user
    await user.save();

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Remove a friend
const removeFriend = async (req, res) => {
  const { userId, friendId } = req.params;
  
  try {
    const user = await User.findByIdAndUpdate(
      userId,
      { $pull: { friends: friendId } },
      { new: true }
    ).populate("friends");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "Friend removed", user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to remove friend" });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
};