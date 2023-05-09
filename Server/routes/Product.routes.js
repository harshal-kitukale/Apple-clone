const express = require("express");
const { ProductModel } = require("../model/product.model");
const productRouter = express.Router();

//Get Route

productRouter.get("/", async (req, res) => {
  let { category } = req.query;

  category = category ? category.toLowerCase() : null;

  try {
    const products = await ProductModel.find({
      category: category || ["mac", "iphone", "ipad", "apple watch", "mobile"],
    });

    res.status(200).send({ products });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});


//get by search Route

productRouter.get("/search", async (req, res) => {
  const name = req.query.category;
  const regex = new RegExp(name, "i");
  try {
    const products = await ProductModel.find({
      category: regex,
    });
    res.status(200).send({ products });
  } catch (error) {
    res.status(400).send({ msg: error });
  }
});

//get by id

productRouter.get("/singleProduct/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const products = await ProductModel.findOne({ _id: id });
    res.status(200).send(products);
  } catch (error) {
    res.status(400).send({ msg: "Error Occurred" });
  }
});
module.exports = { productRouter };
