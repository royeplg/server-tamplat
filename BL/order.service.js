require("../DL/db").connect();
const orderController = require("../DL/order/order.controller");

async function getAllOrderPop() {
  try {
    const orders = await orderController.read({});

    console.log(orders[0].products);
  } catch (e) {
    console.log(e.message);
  }
}
async function getAllOrder() {
  try {
    const orders = await orderController.read({});
    return orders;
  } catch (e) {
    console.log(e.message);
  }
}

async function init(order) {
  try {
    const res = await orderController.create(order);
    console.log(res);
  } catch (e) {
    console.log(e.message);
  }
}

module.exports = { getAllOrder };

// let order = {
//   id: getNewOrderId(),
//   userId: "637f8d93348a28c897babf26",
//   products: [
//     {
//       product: "63904e50f854b601b5d49adc",
//       quantity: 5,
//       finalPrice: 15,
//     },
//     {
//       product: "63904e610f13818665918057",
//       quantity: 1,
//       finalPrice: 300,
//     },
//   ],
//   totalPrice: 315,
// };
