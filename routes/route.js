const userRouter = require("./user.route");

function route(app) {
  app.use("/users", userRouter);
}

module.exports = route;