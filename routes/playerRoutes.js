const mongoose = require("mongoose");
const Path = require("path-parser").default;
const requireLogin = require("../middlewares/requireLogin");

const Player = mongoose.model("players");

module.exports = app => {
  app.get("/api/players", async (req, res) => {
    const players = await Player.find();
    res.send(players);
  });

  app.get("/api/player", async (req, res) => {
    const playerId = req.query.playerId;
    const player = await Player.findOne({ _id: playerId });
    res.send(player);
  });

  app.post("/api/players", requireLogin, async (req, res) => {
    const { name, lastName, dateOfBirth, sex, number, _division } = req.body;

    const player = new Player({
      name,
      lastName,
      dateOfBirth,
      sex,
      number,
      _division
    });

    try {
      await player.save();
      res.send(player);
    } catch (e) {
      res.status(422).send(err);
    }
  });
};
