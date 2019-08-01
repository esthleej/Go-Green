const user = require("../Model/model");
const userController = {};

userController.saveUser = (req, res, next) => {
  res.clearCookie('token');
  user.create({ username: req.body.username, password: req.body.password });
  return next();
};

userController.getUserInfo = (req, res, next) => {
  user.findOne({username: req.headers.username}, (err, result) => {
    if (err) {
      return next(err);
    }
    if (!result) {
      return next('no user found');
    }
    res.locals.user = result;
    return next();
  });
}

userController.getHistory = (req, res, next) => {
  user.findOne(
    {
      username: req.headers.username
    },
    (err, result) => {
      if (err) {
        return next(err);
      }
      if (!result) {
        return next('no user found');
      }
      res.locals.result = result.recyclingHistory;
      return next();
    }
  );
};

userController.verifyUser = (req, res, next) => {
  res.clearCookie('token');
  user.findOne({ username: req.body.username }, (err, result) => {
    if (err) {
      return next(err)
    }
    if (!result) {
      return next('no user found');
    }
    if (result.password === req.body.password) {
      return next();
    } else {
      return next("incorrect password");
    }
  });
};

userController.addToHistory = (req, res, next) => {
  console.log('BOODY', req.body)
  user.findOneAndUpdate(
    { username: req.body.username },
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
