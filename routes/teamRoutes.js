module.exports = app => {
  app.get("/teams", (req, res) => {
    res.redirect("/teams");
  });
};
