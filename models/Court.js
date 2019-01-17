const mongoose = require("mongoose");
const { Schema } = mongoose;

const courtSchema = new Schema({
  name: String,
  description: String,
  city: String,
  Size: String,
  Location: String
});

mongoose.model("courts", courtSchema);
