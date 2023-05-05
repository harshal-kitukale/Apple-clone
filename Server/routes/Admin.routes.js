const express = require("express");
const { ProductModel } = require("../model/product.model");
const { CartModel } = require("../model/cart.model");
const { UserModel } = require("../model/User.model");

const adminRouter = express.Router();

// User-Get Route

adminRouter.get("/users", async (req, res) => {
  const name = req.query.name;
  const regex = new RegExp(name, "i");

  try {
    const data = await UserModel.find({ name: regex });
    res.status(200).send({ data });
  } catch (error) {
    res.status(400).send({ msg: "Error Occurred" });
  }
});

// User-GetByID Route

adminRouter.get("/users/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const data = await UserModel.find({ _id: id });
    res.status(200).send({ data });
  } catch (error) {
    res.status(400).send({ msg: "Error Occurred" });
  }
});

// User-Delete Route

adminRouter.delete("/deleteuser/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await UserModel.findByIdAndDelete({ _id: id });

    res.status(200).send({ msg: "User successfully deleted" });
  } catch (error) {
    res.status(400).send({ msg: "Error Occurred" });
  }
});

// User-Update Route

adminRouter.patch("/updateuser/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await UserModel.findByIdAndUpdate({ _id: id }, req.body);

    res.status(200).send({ msg: "User successfully updated" });
  } catch (error) {
    res.status(400).send({ msg: "Error Occurred" });
  }
});

// Cart-ByUserId Route

adminRouter.get("/cart/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const cart = await CartModel.find({ userID: id });
    res.status(200).send({ data: cart });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

//Product-Add Route

adminRouter.post("/addproduct", async (req, res) => {
  try {
    const newProduct = new ProductModel(req.body);
    await newProduct.save();
    res.status(200).send({ msg: "Product added successfully" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

//Product-Remove Route

adminRouter.delete("/deleteproduct/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await ProductModel.findByIdAndDelete({ _id: id });
    res.status(200).send({ msg: "Product deleted successfully" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

//Product-Update Route

adminRouter.patch("/updateproduct/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await ProductModel.findByIdAndUpdate(id, req.body);
    res.status(200).send({ msg: "Product updated successfully" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

module.exports = { adminRouter };
