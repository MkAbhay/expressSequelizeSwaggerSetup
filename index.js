const dotenv = require("dotenv");
const express = require("express");
const app = express();
const http = require("http");
const db = require("./app/models");
const { initDB } = require("./app/helpers/database_init");
const { swaggerUi, swaggerSpec } = require('./swaggerConfig');


dotenv.config();
console.log("NODE_ENV:", process.env.NODE_ENV || "development");

// swagger setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// http server
const server = http.createServer(app);

// middleware
require("./middleware")(app);

// setup actual route file
require("./app/routes")(app);


// set public folder to be served directly without route
app.use(express.static('public'));

// initialize database
initDB(db)

// set port, listen for requests
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = {
  app,
};
