const mongoose = require("mongoose");
const Path = require("path-parser").default;
const requireLogin = require("../middlewares/requireLogin");

const Tournament = mongoose.model("tournaments");

module.exports = app => {
  app.get("/api/tournaments", async (req, res) => {
    const tournaments = await Tournament.find();
    res.send(tournaments);
  });

  app.get("/api/tournament", async (req, res) => {
    const tournamentId = req.query.tournamentId;
    const tournament = await Tournament.findOne({ _id: tournamentId });
    res.send(tournament);
  });

  app.post("/api/tournaments", requireLogin, async (req, res) => {
    const {
      name,
      city,
      startDate,
      endDate,
      modality,
      category,
      mode
    } = req.body;

    const tournament = new Tournament({
      name,
      city,
      startDate,
      endDate,
      modality,
      category,
      mode
    });

    try {
      await tournament.save();
      res.send(tournament);
    } catch (e) {
      console.log("hubo error");
      console.log(e);
      res.status(422).send(e);
    }
  });
};
