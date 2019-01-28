const mongoose = require("mongoose");
const Path = require("path-parser").default;
const requireLogin = require("../middlewares/requireLogin");
const ObjectId = require("mongodb").ObjectID;
const Player = mongoose.model("players");

module.exports = app => {
  app.get("/api/players", async (req, res) => {
    const players = await Player.find();
    res.send(players);
  });

  app.get("/api/playersbasic", async (req, res) => {
    const playersBasic = await Player.find(
      {},
      { _id: 1, name: 1, lastName: 1 }
    );
    res.send(playersBasic);
  });

  app.get("/api/player", async (req, res) => {
    const playerId = req.query.playerId;
    const player = await Player.findOne({ _id: playerId });
    res.send(player);
  });

  app.post("/api/players", requireLogin, async (req, res) => {
    const {
      name,
      lastName,
      dateOfBirth,
      sex,
      number,
      _division,
      teams
    } = req.body;

    const player = new Player({
      name,
      lastName,
      dateOfBirth,
      sex,
      number,
      _division,
      teams
    });

    try {
      await player.save();
      res.send(player);
    } catch (e) {
      res.status(422).send(err);
    }
  });

  app.put("/api/updateplayer", requireLogin, async (req, res) => {
    const updatedPlayer = req.body;
    const player = await Player.findById(req.body._id.$oid);

    player.name = updatedPlayer.name;
    player.lastName = updatedPlayer.lastName;
    player.dateOfBirth = updatedPlayer.dateOfBirth;
    player.sex = updatedPlayer.sex;
    player.number = updatedPlayer.number;
    player.division = updatedPlayer.division;
    player.isActive = updatedPlayer.isActive;
    player.teams = updatedPlayer.teams;

    try {
      player.save();
      res.send(player);
    } catch (e) {
      res.status(422).send(e);
    }
  });
};
