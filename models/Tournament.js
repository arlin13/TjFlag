const mongoose = require("mongoose");
const { Schema } = mongoose;

const tournamentSchema = new Schema({
  name: String,
  city: String,
  startDate: Date,
  endDate: Date,
  modality: String,
  category: String,
  mode: String,
  champion: String,
  subChampion: String
});

mongoose.model("tournaments", tournamentSchema);
