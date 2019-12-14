const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    rol: {
      type: String,
      required: true,
      enum: ["admin", "user"],
      default: "user"
    }
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);
