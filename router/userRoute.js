const express = require("express");
const router = express.Router();
const user = require("../BL/user.service");

router.get("/allUsers", async (req, res) => {
  const allUsers = await user.readAllUsers();
  res.send(allUsers);
});

router.post("/oneUser", async (req, res) => {
  console.log(req.body.userId);
  const user = await user.res.send(req.body.userId);
});

module.exports = router;
