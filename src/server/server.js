const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const userController = require("./UserControllers/userController");
const cors = require("cors");
const cookieControllers = require("./src/server/Cookies");
const port = 5000;

app.use(cors());
app.use(bodyParser.json({ extended: true }));

// set cookie when they're logged in
app.get("/", cookieControllers.setCookie, (req, res, next) => {
  res.status(200);
});

app.post("/users", userController.saveUser, (req, res, next) => {
  res.status(200).json("user has been saved!");
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
