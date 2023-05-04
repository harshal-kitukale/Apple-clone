const express = require("express");
const userRouter = express.Router();
const bcrypt = require("bcrypt");
const { UserModel } = require("../model/User.model");
userRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      const user = new UserModel({ email, password: hash, name });
      await user.save();
      res.status(200).send({ msg: "You successfully register" });
    });
  } catch (err) {
    res.status(400).send("Something going wrong in the login request");
  }
});
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });

  try {
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result === true) {
          const token = jwt.sign(
            { authorID: user._id, authorName: user.name },
            "masai"
          );
          res.status(200).send({ msg: "Successfully get Token", token: token });
        }
      });
    } else {
      res.status(200).send({ msg: "U are not that person" });
    }
  } catch (err) {
    res.status(400).send("Something going wrong in the login request");
  }
});

module.exports = { userRouter };
