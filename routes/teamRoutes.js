const mongoose = require("mongoose");
const Path = require("path-parser").default;
const requireLogin = require("../middlewares/requireLogin");

const Team = mongoose.model("teams");

module.exports = app => {
  app.get("/api/teams/:teamname", async (req, res) => {
    console.log("Im on get teams teamname");
    const team = await Team.find({ name: req.params.teamname });
    res.send(req.params);
  });

  app.get("/api/teams", async (req, res) => {
    const teams = await Team.find();
    res.send(teams);
  });

  app.post("/api/teams", requireLogin, async (req, res) => {
    const { name, city, category, mode, division } = req.body;

    const team = new Team({
      name,
      city,
      category,
      mode,
      division
    });

    try {
      await team.save();
      res.send(team);
    } catch (e) {
      res.status(422).send(err);
    }
  });
};
