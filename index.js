const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys.js");
require("./models/User");
require("./services/passport");

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);

const app = express();

app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds (h/m/s/ms)
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

var personas = ["Arlin <3", "Iren3e", "Ka4lla", "Car0o", "J1avo"];

// General get
app.get("/", (req, res) => {
  var number = Math.floor(Math.random() * 4);
  var text = "there... " + personas[number] + "?";
  res.send({ HI: text });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
