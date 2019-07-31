const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const userController = require("./server/UserControllers/userController");
const cors = require("cors");
const port = 5000;

app.use(cors());
app.use(bodyParser.json({ extended: true }));

app.post("/users", userController.saveUser, (req, res, next) => {
  res.status(200).json("user has been saved!");
});

app.get("/recyclingHistory", userController.getHistory, (req, res, next) => {
  res.status(200).json(res.locals.result);
});

app.post("/recyclingHistory", )

app.use((err, req, res, next) => {
  res.status(400).json(err);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
