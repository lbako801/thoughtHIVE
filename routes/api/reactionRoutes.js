const router = require("express").Router();

const {
    createReaction,
    deleteReaction
} = require("../../controllers/controllers");

// Create a new Reaction
router.post("/", createReaction);

// Remove a Reaction by its _id
router.delete("/:id", deleteReaction);

module.exports = router;