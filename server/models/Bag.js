const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    amount: Number,
    categoryId: { type: String },
    subcategoryId: { type: String },
    companyId: { type: String },
    userId: { type: String },
    productId: { type: String },
    image: { type: String },
    name: { type: String },
    description: { type: String },
    price: Number,
    total: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Bag", schema);
