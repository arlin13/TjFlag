const mongoose = require("mongoose");
const { Schema } = mongoose;

const divisionSchema = new Schema({
  name: String
});

module.exports = divisionSchema;
