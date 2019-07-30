const user = require("../Model/model");
const userController = {};

userController.saveUser = (req, res, next) => {
  const userData = req.body.user;
  user.create(userData);
  return next();
};

userController.getHistory = (req, res, next) => {
  user.find({
    username: req.body.name
  });
};

module.exports = userController;
