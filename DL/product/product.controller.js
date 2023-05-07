const productDate = require("./product.modules");

async function createProduct(data) {
  try {
    let res = await productDate.create(data);
    return res;
  } catch (error) {
    console.log(error);
  }
}

async function read(filter, proj) {
  try {
    let res = await productDate.find(filter, proj);
    return res;
  } catch (error) {
    console.log(error);
  }
}

async function update(filter, newData) {
  try {
    let res = await productDate.findOneAndUpdate(filter, newData);
    return res;
  } catch (error) {
    console.log(error);
  }
}

async function del(productId) {
  try {
    let res = await productDate.findOneAndUpdate(productId, {
      isActive: false,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { del, update, read, createProduct };

// product for example

const product = {
  id: 1,
  title: "bamba",
  price: 4.9,
  description: "osem new bamba",

  rating: {
    rate: 5,
    count: 1,
  },
  inStock: 25,
};
