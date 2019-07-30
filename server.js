const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const userController = require("./UserControllers/userController");
const cors = require("cors");
const port = 5000;

app.use(cors());
app.use(bodyParser.json({ extended: true }));

app.post("/users", userController.saveUser, (req, res, next) => {
  res.status(200).json("user has been saved!");
});

app.get("/recyclingHistory", )
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
