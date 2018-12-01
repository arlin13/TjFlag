const express = require("express");

const app = express();

request_number = 0;

// json object
arlin = {
  name: "Arlin",
  last_name: "Grijalba",
  age: 28
};

var personas = ["Irene", "Kalla", "Caro", "Javo"];

// General get
app.get("/", (req, res) => {
  var number = Math.floor(Math.random() * 3);
  var text = "there... " + personas[number];
  res.send({ hi: text });
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

const PORT = process.env.PORT || 5000;
app.listen(PORT);
