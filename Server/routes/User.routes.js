const express = require("express");
const userRouter = express.Router();
const { UserModel } = require("../model/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Register Route

userRouter.post("/register", async (req, res) => {
  const { name, email, password} = req.body;

  try {
    if (name == "" || email == "" || password == "") {
      res.status(400).send({ msg: "All fields are required" });
    } else {
      const ifAvailable = await UserModel.find({ email });

      if (ifAvailable.length > 0) {
        res.status(200).send({ msg: "Account already exists" });
      } else {
        bcrypt.hash(password, 4, async (err, hash) => {
          const user = new UserModel({
            name,
            email,
            password: hash,
          });
          await user.save();
        });
        res.status(200).send({ msg: "Registration successful" });
      }
    }
  } catch (err) {
    res.status(400).send({ msg: "Something went wrong, Try Again" });
  }
});

// Login Route

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.find({ email });
    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, (err, result) => {
        if (err) console.log(err);

        if (result) {
          res.status(200).send({
            msg: "login successful",
            token: jwt.sign({ userID: user[0]._id }, process.env.SECRET_KEY),
          });
        } else {
          res.status(400).send({ msg: "wrong credential" });
        }
      });
    } else {
      res.status(400).send({ msg: "User doesn't exist" });
    }
  } catch (err) {
    res.status(400).send({ msg: "Something went wrong. Try again" });
  }
});

// Delete Route

userRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await UserModel.findByIdAndDelete({ _id: id });

    res.status(200).send({ msg: "Account successfully deleted" });
  } catch (error) {
    res.status(400).send({ msg: "Error Occurred" });
  }
});

// Update Route

userRouter.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await UserModel.findByIdAndUpdate({ _id: id }, req.body);

    res.status(200).send({ msg: "Account successfully updated" });
  } catch (error) {
    res.status(400).send({ msg: "Error Occurred" });
  }
});

module.exports = { userRouter };
