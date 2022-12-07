const productDate = require("./product.modules");

async function creat(data) {
  let res = await productDate.create(data);
  console.log(res);
}

async function read(filter, proj) {
  let res = await productDate.find(filter, proj);
  console.log(res);
}

async function update(filter, newData) {
  let res = await productDate.findOneAndUpdate(filter, newData, { new: true });
  console.log(res);
}

async function del(productId) {
  let res = await productDate.findOneAndUpdate(productId, { isActive: false });
}

module.exports = { del, update, read, creat };
