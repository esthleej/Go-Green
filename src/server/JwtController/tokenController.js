const jwt = require("jsonwebtoken");
const { secret } = require("../config");

module.exports = {
  checkToken(req, res, next) {
    let token = req.cookies.token;
    if (!token || !token.startsWith("Bearer")) {
      return next("invalid token format");
    }
    
    token = token.split(' ')[1];
    jwt.verify(token, secret, (err, decodedToken) => {
      if (err) {
        return next(err);
      }
      res.locals.token = decodedToken;
      console.log('TOKEN', res.locals.token)
      next();
    });
  },

  signToken(req, res, next) {
    let token = jwt.sign({ username: req.body.username }, secret);
    res.cookie("token", `Bearer ${token}`);
    next();
  }
};
