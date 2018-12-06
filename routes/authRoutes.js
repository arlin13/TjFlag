const passport = require("passport");

module.exports = app => {
  // Google auth get
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  // Google auth redirect
  app.get("/auth/google/callback", passport.authenticate("google"));
};
