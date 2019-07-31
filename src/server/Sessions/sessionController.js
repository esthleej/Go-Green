const Session = require("./sessionModel");
const sessionController = {};

sessionController.isLoggedIn = (req, res, next) => {
  Session.find({ cookieId: req.cookies.ssid }, (err, data) => {
    if (!data) {
      return res.redirect("/signup"); // <- redirected to signup page if doesnt exist
    }
    return next();
  });
};

// need to create a function to create session
