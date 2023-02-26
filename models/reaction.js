const mongoose = require("mongoose");
const { Schema } = mongoose;

const ReactionSchema = new Schema(
  {
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const dateFormat = (createdAt) => {
  return new Date(createdAt).toLocaleString();
};

const Reaction = mongoose.model("Reaction", ReactionSchema);

module.exports = Reaction;
