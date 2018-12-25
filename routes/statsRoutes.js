module.exports = app => {
  app.get("/stats", (req, res) => {
    res.redirect("/stats");
  });
};
