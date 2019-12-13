const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const postsSchema = new Schema({
  owner: {
    type: Schema.type.ObejctId,
    ref: "User"
  },
  description: {
    type: String
  },
  likes: {},
  reports: {},
  tags: {
    enum: ["Fanstasia sexual", "Juguete sexual"]
  }
});

module.exports = model("Posts", postsSchema);
