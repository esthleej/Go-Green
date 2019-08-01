const express = require("express");
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
const userController = require("./UserControllers/userController");
const cors = require("cors");
const tokenController = require("./JwtController/tokenController");
const cookieParser = require("cookie-parser");
const port = 5000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
// sign up
app.post("/users", userController.saveUser, tokenController.signToken, (req, res, next) => {
  res.status(200).json("user has been saved!");
});

app.get("/users", userController.getUserInfo, (req, res, next) => {
  res.status(200).json(res.locals.user);
})

app.get("/verifyToken", tokenController.checkToken, (req, res, next) => {
  console.log('TOKEN, ', res.locals.token)
  res.status(200).json(res.locals.token);
});

app.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.status(200).json('logged out');
});

// loggin - middleware to verify user
app.post("/login", userController.verifyUser, tokenController.signToken, (req, res, next) => {
  res.status(200).json('user verified');
});

app.get("/recyclingHistory", userController.getHistory, (req, res, next) => {
  res.status(200).json(res.locals.result);
});
app.post("/recyclingHistory", userController.addToHistory, (req, res, next) => {
  res.status(200).json("history has been updated.");
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'index.html'), err => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.use((err, req, res, next) => {
  res.status(400).json(err || 'err');
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
