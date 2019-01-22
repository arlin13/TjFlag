const mongoose = require("mongoose");
const { Schema } = mongoose;

const courtSchema = new Schema({
  name: String,
  description: String,
  city: String,
  address: String,
  location: {
    type: String,
    coordinates: [Number]
  }
});

// location: {
//   type: "Point",
//   coordinates: [-73.856077, 40.848447]
// }

mongoose.model("courts", courtSchema);
