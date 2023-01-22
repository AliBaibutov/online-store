const express = require("express");
const Product = require("../models/Product");
const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
  try {
    const list = await Product.find();
    res.status(200).send(list);
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});
router.post("/", async (req, res) => {
  try {
    const { name } = req.body;

    const existingProduct = await Product.findOne({ name });

    if (existingProduct) {
      return res.status(400).json({
        error: {
          message: "PRODUCT_EXISTS",
          code: 400,
        },
      });
    }

    await Product.create(req.body);

    res.status(201).send();
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

module.exports = router;
