const { User, Thought, ReactionSchema } = require("../models/models");

// Get all thoughts
const getAllThoughts = async (req, res) => {
  try {
    const thoughtData = await Thought.find({});
    res.json(thoughtData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

// Get a single thought by id
const getThoughtById = async (req, res) => {
  try {
    const thoughtData = await Thought.findById(req.params.id);
    if (!thoughtData) {
      return res.status(404).json({ message: "No thought with this id!" });
    }
    res.json(thoughtData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

// Create a new thought
const createThought = async (req, res) => {
  try {
    const thoughtData = await Thought.create(req.body);
    const userId = thoughtData.userId;

    // Add the thought to the user's thoughts array
    const userData = await User.findByIdAndUpdate(
      userId,
      { $push: { thoughts: thoughtData._id } },
      { new: true }
    );

      res.json({ message: "Thought created!" });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

// Update a thought by id
const updateThought = async (req, res) => {
    try {
      const thoughtData = await Thought.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!thoughtData) {
        return res.status(404).json({ message: "No thought with this id!" });
      }
  
      // Retrieve the thought's user ID
      const userId = thoughtData.userId;
  
      // Push the thought ID to the user's thoughts array
      const userData = await User.findByIdAndUpdate(
        userId,
        { $addToSet: { thoughts: thoughtData._id } },
        { new: true }
      );
  
      res.json({ message: "Thought updated successfully!" });
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  };
  

// Delete a thought by id
const deleteThought = async (req, res) => {
  try {
    const thoughtData = await Thought.findByIdAndDelete(req.params.id);
    if (!thoughtData) {
      return res.status(404).json({ message: "No thought with this id!" });
    }

    // Remove the thought from the user's thoughts array
    await User.updateOne(
      { _id: thoughtData.userId },
      { $pull: { thoughts: thoughtData._id } }
    );

    res.json({message: "Thought deleted successfully!"});
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

module.exports = {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
};