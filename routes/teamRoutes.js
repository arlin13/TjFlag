const mongoose = require("mongoose");
const Path = require("path-parser").default;
const requireLogin = require("../middlewares/requireLogin");

const Team = mongoose.model("teams");

module.exports = app => {
  // app.param("teamname", async function(request, response, next, teamname) {
  //   console.log("params function (pls work 1)");
  //   const team = await Team.find({ name: "Osas" });
  //   req.teamname = team;
  //   return next();
  // });

  app.get("/api/teams", async (req, res) => {
    const teams = await Team.find();
    res.send(teams);
  });

  app.get("/api/teams/:teamname", function(req, res) {
    console.log("api/teams/teamname route (pls work 2)");
    res.send(req.params);
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
