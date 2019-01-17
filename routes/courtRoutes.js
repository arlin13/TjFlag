const mongoose = require("mongoose");
const Path = require("path-parser").default;
const requireLogin = require("../middlewares/requireLogin");

const Court = mongoose.model("courts");

module.exports = app => {
  app.get("/api/courts", async (req, res) => {
    const courts = await Court.find();
    res.send(courts);
  });

  app.post("/api/courts", requireLogin, async (req, res) => {
    const { name, description, city, location } = req.body;

    const court = new Court({
      name,
      description,
      city,
      location
    });

    try {
      await court.save();
      res.send(court);
    } catch (e) {
      res.status(422).send(err);
    }
  });
};
