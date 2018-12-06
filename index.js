const express = require("express");
const mongoose = require("mongoose");
cons keys = require("./config/keys");
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

var personas = ["Irene", "Kalla", "Caro", "Javo"];

// General get
app.get("/", (req, res) => {
  var number = Math.floor(Math.random() * 4);
  var text = "there... " + personas[number] + "?";
  res.send({ hi: text });
});

require('/.routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
