module.exports = (router) => {
  require("./users")(router);
  require("./candidates")(router);
};
