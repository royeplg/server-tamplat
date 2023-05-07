const express = require("express");
const router = express.Router();
const userService = require("../BL/user.service");
const auth = require("../auth");


router.post("/register", async (req, res) => {
  try {
    let userData = req.body;

    let newUser = await userService.createNewUser(userData);
    console.log(newUser);

    if (newUser === "user created") {
      let newToken = await auth.createToken(userEmail);
      res.send(newToken);
    }

    return newUser;
  } catch (error) {
    console.log(error);
  }
});
router.get("/login/:email", async (req, res) => {
  try {
    let userEmail = req.params.email;

    let user = await userService.ifExist(userEmail);
    if (!user) {
      res.send("user not exist");
      return;
    } else {
      // create token
      let newToken = await auth.createToken(userEmail);
      res.send(newToken);
    }
  } catch (error) {
    console.log(error);
  }
});

const data = {
  email: "epg@gmail.com",
  password: "12345",
  gender: "male",
  fName: "joni",
  lName: "david",
  dob: "1990-10-05T22:00:00.000+00:00",
};

module.exports = router;
