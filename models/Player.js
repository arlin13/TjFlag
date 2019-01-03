const mongoose = require("mongoose");
const { Schema } = mongoose;

const playerSchema = new Schema({
  name: String,
  lastName: String,
  dateOfBirth: Date,
  gender: String,
  number: Number,
  _division: { type: Schema.Types.ObjectId, ref: "Division" },
  isActive: Boolean
});

mongoose.model("players", playerSchema);
