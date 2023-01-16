const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    amount: Number,
    categoryId: { type: Schema.Types.ObjectId, ref: "Category" },
    subcategoryId: { type: Schema.Types.ObjectId, ref: "Subcategory" },
    companyId: { type: Schema.Types.ObjectId, ref: "Company" },
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
