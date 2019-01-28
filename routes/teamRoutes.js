const mongoose = require("mongoose");
const Path = require("path-parser").default;
const requireLogin = require("../middlewares/requireLogin");

const Team = mongoose.model("teams");

module.exports = app => {
  app.get("/api/teams", async (req, res) => {
    const teams = await Team.find();
    res.send(teams);
  });

  app.get("/api/teamsbasic", async (req, res) => {
    const teamsBasic = await Team.find({}, { _id: 1, name: 1 });
    res.send(teamsBasic);
  });

  app.get("/api/team", async (req, res) => {
    const teamId = req.query.teamId;
    const team = await Team.findOne({ _id: teamId });
    res.send(team);
  });

  app.post("/api/teams", requireLogin, async (req, res) => {
    const { name, city, category, mode, division, coach, players } = req.body;

    const team = new Team({
      name,
      city,
      category,
      mode,
      division,
      coach,
      players
    });

    try {
      await team.save();
      console.log(team);
      res.send(team);
    } catch (e) {
      res.status(422).send(err);
    }
  });
};
