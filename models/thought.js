const mongoose = require("mongoose");
const { Schema } = mongoose;

const ReactionSchema = require("./reaction");

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxLength: 280,
      minLength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [ReactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const dateFormat = (createdAt) => {
  return new Date(createdAt).toLocaleString();
};

const Thought = mongoose.model("Thought", ThoughtSchema);

module.exports = Thought;
