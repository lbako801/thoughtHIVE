const { User, Thought } = require('../models/models');

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

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
};

const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!user) {
            res.status(404).json({ message: "No user found with this id!" });
            return;
        }
        res.status(200).json({ message: `Successfully updated user with id:${req.params.id}` });
    } catch (err) {
        res.status(500).json(err);
    }
};

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

    res
      .status(200)
      .json({
        message: `Delete successful: deleted user with id:${req.params.id} and associated thoughts if applicable.`,
      });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };
