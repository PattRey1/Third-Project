const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const postsSchema = new Schema(
  {
    _owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    description: {
      type: String,
      required: true
    },
    // tags: {
    //   enum: ["Fanstasia sexual", "Juguete sexual", "Educación", "Placer"]
    // },
    image: {
      type: String
    },
    title: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = model("Posts", postsSchema);
