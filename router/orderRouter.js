const express = require("express");
const router = express.Router();
const order = require("../BL/order.service");

router.get("/allOrder", async (req, res) => {
  console.log(req.path);

  const allOrder = await order.getAllOrder();
  res.send(allOrder);
});

module.exports = router;
