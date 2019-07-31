const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const userController = require("./UserControllers/userController");
const cors = require("cors");
const tokenController = require("./JwtController/tokenController");
const cookieParser = require("cookie-parser");
const port = 5000;

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(cookieParser());

// sign up
app.post("/users", userController.saveUser, tokenController.signToken, (req, res, next) => {
  res.status(200).json("user has been saved!");
});

// loggin - middleware to verify user
app.post("/login", userController.verifyUser, tokenController.signToken, (req, res, next) => {
  res.status(200).json('login successful!')
});

app.get("/recyclingHistory", userController.getHistory, (req, res, next) => {
  res.status(200).json(res.locals.result);
});

app.post("/recyclingHistory", userController.addToHistory, (req, res, next) => {
  res.status(200).json("history has been updated.");
});

app.use((err, req, res, next) => {
  res.status(400).json(err);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
