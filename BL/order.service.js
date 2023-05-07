const orderController = require("../DL/order/order.controller");
const userController = require("../DL/user/user.controller");

async function createNewOrder(data) {
  try {
    if (!data.userId || !data.id) return " data missing";

    const ifUserExist = await userController.read(data.userId);
    console.log(ifUserExist);

    if (!ifUserExist) return "the user is not exist";

    const newOrder = await orderController.create(data);
    return newOrder;
  } catch (e) {
    console.log(e.message);
  }
}

async function addProduct(data) {
  try {
    if (!data.orderId || !data.productId) return " data missing";

    let products = await orderController.read({ id: data.orderId }, {});
    const Product = await orderController.updateOne(data.orderId, {
      products: data.ProductId,
    });
    return Product;
  } catch (e) {
    console.log(e.message);
  }
}

async function getAllUserOrder(userID) {
  try {
    if (!userID) return " data missing";

    const ifUserExist = await userController.read(data.userId);

    if (!ifUserExist) return "the user is not exist";

    const orders = await orderController.read({ userId: userID });
    return orders;
  } catch (e) {
    console.log(e.message);
  }
}
async function getAllOrder(data) {
  try {
    if (!data) return " data missing";

    const orders = await orderController.read({ data });
    return orders;
  } catch (e) {
    console.log(e.message);
  }
}

module.exports = { createNewOrder, getAllOrder, addProduct, getAllUserOrder };

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
