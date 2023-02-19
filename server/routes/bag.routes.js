const express = require("express");
const Bag = require("../models/Bag");
const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
  try {
    const list = await Bag.find();
    res.status(200).send(list);
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    // const { name } = req.body;
    console.log(req.body);

    // const existingBag = await Bag.findOne({ name });

    // if (existingBag) {
    //   return res.status(400).json({
    //     error: {
    //       message: "BAG_EXISTS",
    //       code: 400,
    //     },
    //   });
    // }
    const newBag = await Bag.create(req.body);

    res.status(201).send(newBag);
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

router.delete("/:bagId", async (req, res) => {
  try {
    const { bagId } = req.params;
    const removedBag = await Bag.findById(bagId);
    await removedBag.remove();
    return res.send(null);
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

router.patch("/:bagId", async (req, res) => {
  try {
    const { bagId } = req.params;

    const updatedProduct = await Bag.findByIdAndUpdate(bagId, req.body, {
      new: true,
    });
    res.send(updatedProduct);
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

module.exports = router;
