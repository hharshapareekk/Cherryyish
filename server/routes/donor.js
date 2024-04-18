const express = require("express");
const donorRouter = express.Router();
const auth = require("../middlewares/auth");
const Product = require("../models/product");
//adding product
donorRouter.post("/donor/add-product", auth, async (req, res) => {
  try {
    const { name, description, images, category, isPerishable } = res.body;
    let product = new Product({
      name,
      description,
      images,
      category,
      isPerished,
    });
    product = await product.save();
    res.json(product);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// get all the products
// /admin/get-all-products
donorRouter.get("/donor/get-products", auth, async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = donorRouter;
