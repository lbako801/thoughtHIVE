const mongoose = require('mongoose');
const { Schema } = mongoose;

const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId(),
    },
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

module.exports = ReactionSchema;