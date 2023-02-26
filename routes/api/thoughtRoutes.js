const router = require("express").Router();

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
    deleteThought,
  createReaction,
  deleteReaction,
  getReaction
} = require("../../controllers/controllers");

// Get all thoughts
router.get("/", getAllThoughts);

// Get a single thought by its _id
router.get("/:id", getThoughtById);

// Create a new thought
router.post("/", createThought);

// Update a thought by its _id
router.put("/:id", updateThought);

// Remove a thought by its _id
router.delete("/:id", deleteThought);

// Add, get, and delete a reaction
router.route("/:thoughtId/reactions").post(createReaction).get(getReaction).delete(deleteReaction);

module.exports = router;