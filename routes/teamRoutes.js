const mongoose = require("mongoose");
const Path = require("path-parser").default;
const requireLogin = require("../middlewares/requireLogin");

const Team = mongoose.model("teams");

module.exports = app => {
  app.get("/api/teams", async (req, res) => {
    console.log("TEAMS!!!");
    const teams = await Team.find();
    res.send(teams);
  });

  app.get("/api/teams/:name", async (req, res) => {
    let name = req.params.name;
    console.log("Team name route - details");
    const team = await Team.find({ name: name });
    res.send(team);
  });

  app.post("/api/teams", requireLogin, async (req, res) => {
    const { name, city, category, gender, division } = req.body;

    const team = new Team({
      name,
      city,
      category,
      gender,
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
