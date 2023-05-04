const bcrypt = require("bcrypt");
const { decode } = require("jsonwebtoken");
const jwt = require("jwtwebtoken");

const auth = async (req, res, next) => {
  const token = req.headers.authorization.split("")[1];
  if (token) {
    try {
      let decoded = jwt.verify(token, "masai");
      if (decoded) {
        req.body.authorId = decoded.authorID;
        req.body.authorName = decoded.authorName;
        next();
      } else {
        res.status(200).send("something is wrong in middleware");
      }
    } catch (err) {
      res.status(400).send({ msg: "Something going wrong" });
    }
  }
};
module.exports = { auth };
