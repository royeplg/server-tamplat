const productController = require("../DL/product.controller");

async function createNewProduct(productData) {
  const exists = await productIsExists(productData.id);
  if (exists) return "the product is exist";

  const newProduct = await productController.create(productData);
  return newProduct;
}

async function updateProduct(productId, newData) {
  const exists = await productIsExists(productData.id);
  if (!exists) return "the product is not exist";

  await productController.updateMany({ id: productId }, newData);
  const updatedProduct = await productController.read({ id: productId });
  return updatedProduct;
}

async function productIsExists(id) {
  return await productController.read({ id });
}

module.exports = { createNewProduct, updateProduct };

/// example
let product = {
  id: 2,
  title: "airplane",
  price: 300,
  description: "lorem ipsum...",
  category: { title: "electronics" },
  image:
    "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ioY9jnR7w52Y/v0/1200x-1.jpg",
  inStock: 10,
};
