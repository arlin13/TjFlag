const mongoose = require("mongoose");
const { Schema } = mongoose;
const TeamSchema = require("./Team");

const playerSchema = new Schema({
  name: String,
  lastName: String,
  dateOfBirth: Date,
  sex: String,
  number: Number,
  division: String,
  isActive: Boolean,
  teams: [{}]
});

mongoose.model("players", playerSchema);
