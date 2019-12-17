const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const participantsShema = new Schema(
  {
    _event: {
      type: Schema.Types.ObjectId,
      ref: "Event",
      required: true
    },
    _participant: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  { timestamps: true }
);

module.exports = model("Participants", participantsShema);
