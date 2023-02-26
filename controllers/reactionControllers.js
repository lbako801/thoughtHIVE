const Thought = require("../models/thought");
const Reaction = require("../models/reaction");

const createReaction = async (req, res) => {
  try {
    const { reactionBody, username } = req.body;
    const thought = await Thought.findById(req.params.thoughtId);

    if (!thought) {
      return res.status(404).json({ message: "Thought not found" });
    }

    const reaction = await Reaction.create({ reactionBody, username });
    thought.reactions.push(reaction);
    await thought.save();

    res.json(reaction);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const deleteReaction = async (req, res) => {
  try {
    const { thoughtId, reactionId } = req.params;
    const thought = await Thought.findByIdAndUpdate(
      thoughtId,
      { $pull: { reactions: reactionId } },
      { new: true }
    );

    if (!thought) {
      return res.status(404).json({ message: "Thought not found" });
    }

    await Reaction.findByIdAndDelete(reactionId);

    res.json({ message: "Reaction deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const getReactions = async (req, res) => {
    try {
      const thought = await Thought.findById(req.params.thoughtId).populate("reactions");
  
      if (!thought) {
        return res.status(404).json({ message: "Thought not found" });
      }
  
      res.json(thought.reactions);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  };
   

module.exports = { createReaction,deleteReaction, getReaction};