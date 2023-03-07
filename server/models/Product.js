const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    amount: Number,
    categoryId: { type: String },
    subcategoryId: { type: String },
    companyId: { type: String },
    image: { type: String },
    name: { type: String },
    description: { type: String },
    price: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Product", schema);
