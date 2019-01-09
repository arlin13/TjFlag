const mongoose = require("mongoose");
const { Schema } = mongoose;
const TeamSchema = require("./Team");

const playerSchema = new Schema({
  name: String,
  lastName: String,
  dateOfBirth: Date,
  sex: String,
  number: Number,
  _division: { type: Schema.Types.ObjectId, ref: "Division" },
  isActive: Boolean,
  teams: [TeamSchema]
});

mongoose.model("players", playerSchema);
