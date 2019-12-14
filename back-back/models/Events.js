const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const eventsSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    date: {
      type: Number,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    price: {
      type: Number
    },
    img: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = model("Events", eventsSchema);
