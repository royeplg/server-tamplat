const express = require("express");
const router = express.Router();
const order = require("../BL/order.service");

router.post("/allOrder", async (req, res) => {
  try {
    const allOrder = await order.getAllOrder(req.body);
    res.send(allOrder);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
