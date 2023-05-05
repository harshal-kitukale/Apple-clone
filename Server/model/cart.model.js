const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
  {
    title: String,
    category: String,
    image: String,
    price: String,
    specs: Array,
    userID: String,
  },
  {
    versionKey: false,
  }
);

const CartModel = mongoose.model("cartProducts", cartSchema);

module.exports = { CartModel };
