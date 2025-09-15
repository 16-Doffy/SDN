const express = require("express");
const productRouter = express.Router();

// Middleware cho tất cả method trên /products
productRouter.use((req, res, next) => {
  res.setHeader("Content-Type", "text/plain");
  next();
});

// GET /products
productRouter.get("/", (req, res) => {
  res.send("show all product");
});

// POST /products
productRouter.post("/", (req, res) => {
  res.send("create new product " + req.body.productName + " and name");
});

// GET /products/:id
productRouter.get("/:id", (req, res) => {
  res.send("show detail product " + req.params.id);
});

module.exports = productRouter;
