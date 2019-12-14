const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const commentsShema = new Schema(
  {
    description: {
      type: String,
      required: true
    },
    _owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    _posts: {
      type: Schema.Types.ObjectId,
      ref: "Post",
      required: true
    }
  },
  { timestamps: true }
);

module.exports = model("Comments", commentsShema);
