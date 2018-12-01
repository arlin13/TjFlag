const express = require("express");

const app = express();

request_number = 0;

// json object
arlin = {
  name: "Arlin",
  last_name: "Grijalba",
  age: 28
};

// General get
app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

// Arlin get
app.get("/arlin", (req, res) => {
  res.send({ Arlin: "Que bonita eres: " + arlin.name });
});

// Total requests get
app.get("/total_requests", (req, res) => {
  request_number++;
  res.send({ total_requests: request_number });
});

const PORT = app.env.PORT || 5000;
app.listen(PORT);
