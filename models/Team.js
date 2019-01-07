const mongoose = require("mongoose");
const { Schema } = mongoose;

const teamSchema = new Schema({
  name: String,
  city: String,
  category: String
});

mongoose.model("teams", teamSchema);
