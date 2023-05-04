const express = require("express");
const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  try {






  } catch (err) {
    res.status(400).send("Something going wrong in the login request");
  }
});
userRouter.post("/login", async (req, res) => {
  try {
  } catch (err) {
    res.status(400).send("Something going wrong in the login request");
  }
});

module.exports = { userRouter };
