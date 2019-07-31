const user = require("../Model/model");
const userController = {};

userController.saveUser = (req, res, next) => {
  user.create({ username: req.body.username, password: req.body.password });
  return next();
};

userController.getHistory = (req, res, next) => {
  // console.log("req.body.name", req.body.name);
  user.findOne(
    {
      username: req.headers.name
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

userController.verifyUser = (req, res, next) => {
  user.findOne({ username: req.body.username }, (err, result) => {
    if (result.password == req.body.password) {
      return next();
    } else {
      return next("incorrect password");
    }
  });
};

userController.addToHistory = (req, res, next) => {
  user.findOneAndUpdate(
    { username: req.body.name },
    {
      $push: { recyclingHistory: req.body.history },
      $inc: {
        totalPaid: req.body.history.amountPaid,
        totalItemsRecycled: req.body.history.amountRecycled
      }
    },
    next
  );
};

module.exports = userController;
