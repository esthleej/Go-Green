const user = require("../Model/model");
const userController = {};

userController.saveUser = (req, res, next) => {
  const userData = req.body.user;
  user.create(userData);
  return next();
};

userController.getHistory = (req, res, next) => {
  // console.log("req.body.name", req.body.name);
  user.findOne(
    {
      username: req.body.name
    },
    (err, result) => {
      if (err) {
        return next(err);
      }
      console.log("result", result);
      res.locals.result = result.recyclingHistory;
      return next();
    }
  );
};

userController.addToHistory = (req, res, next) => {};

module.exports = userController;
