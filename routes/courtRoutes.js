const mongoose = require("mongoose");
const Path = require("path-parser").default;
const requireLogin = require("../middlewares/requireLogin");

const Court = mongoose.model("courts");

module.exports = app => {
  app.get("/api/courts", async (req, res) => {
    const courts = await Court.find();
    res.send(courts);
  });

  app.get("/api/court", async (req, res) => {
    const courtId = req.query.courtId;
    const court = await Court.findOne({ _id: courtId });
    res.send(court);
  });

  app.post("/api/courts", requireLogin, async (req, res) => {
    const { name, description, city, address, location } = req.body;

    const court = new Court({
      name,
      description,
      city,
      address,
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
