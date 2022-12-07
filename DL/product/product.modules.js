const mongoose = require("mongoose");
require("../db");

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  titel: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imege: {
    type: String,
    required: true,
  },
  reting: {
    rate: { type: Number, default: 2.5 },
    count: { type: Number, default: 1 },
  },
  inStock: {
    type: Number,
    required: true,
    default: 0,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

const productDate = mongoose.model("product", productSchema);

module.exports = productDate;
