const express = require("express");
const { CartModel } = require("../model/cart.model");

const cartRouter = express.Router();

//Post Route

cartRouter.post("/add", async (req, res) => {
  try {
    const newProduct = new CartModel(req.body);
    await newProduct.save();
    res.status(200).send({ msg: "Product added to Cart" });
  } catch (error) {
    res.status(400).send({ error });
  }
});

//Get Route

cartRouter.get("/", async (req, res) => {
  try {
    const products = await CartModel.find({ userID: req.body.userID });
    res.status(200).send({ data: products });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});


// Delete Route

cartRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await CartModel.findByIdAndDelete({ _id: id });
    res.status(200).send({ msg: "Product removed successfully" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

module.exports = { cartRouter };
