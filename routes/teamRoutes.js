module.exports = app => {
  app.get("/teams", (req, res) => {
    res.redirect("/teams");
  });

  app.post("/teams", (req, res) => {
    res.redirect("/teams");
  });
};
