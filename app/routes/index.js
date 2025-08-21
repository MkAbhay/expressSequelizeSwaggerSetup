const router = require("express").Router();

module.exports = (app) => {
  require("./v1")(router);

  app.use("/api/v1", router);

  app.use("/api/healt", (req, res) => {
    res
      .status(200)
      .json({ status: true, message: "Server is running healthy", code: 200, data: null });
  });

  app.use((req, res) => {
    res.status(404).json({ status: false, message: "Not found", code: 404, data: null });
  });
};
