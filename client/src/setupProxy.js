const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(proxy("/auth/google", { target: "http://localhost:5000/" }));
  // app.use(proxy("/arlin.grijalba", { target: "https://www.facebook.com/" }));
};