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
    res.json(thoughtData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};


module.exports = {
  getAllThoughts,
    getThoughtById,
    createThought,
  
};