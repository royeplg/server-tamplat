const express = require("express");
const router = express.Router();
const user = require("../BL/user.service");

const jwt = require("jsonwebtoken");
const secret = "12noy67abi67abo";

async function createToken(data) {
  const token = jwt.sign({ data }, secret, { expiresIn: "1h" });
  if (!token) console.log("token not created");
  return token;
}

let myToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoicm95ZUBycnIuY29tIiwiaWF0IjoxNjgyNjcyMTI5LCJleHAiOjE2ODI2NzU3Mjl9.0ZlHwEI1s75yXg0B8fgiptsfZpY2W3kccbMH0n08BRA";
async function verifyToken(token) {
  let ifToken = jwt.verify(token, secret, { expiresIn: "1h" });
  return ifToken;
}

router.get("/createToken/:email", async (req, res) => {
  let email = req.params.email;
  if (!email) {
    res.send("no email in url");
    return;
  }

  console.log(email);
  console.log("token created");
  let token = await createToken(email);
  res.send(token);
});

router.get("/validToken", async (req, res) => {
  // let token = req.params.token;
  // if (!token) {
  //   res.send("there is no token");
  //   return;
  // }
  let ifValid = await verifyToken(myToken);
  console.log(ifValid);
  res.send(ifValid);
});

router.get("/allUsers/:userEmail", async (req, res) => {
  console.log(req.params.userEmail);

  const allUsers = await user.readAllUsers();
  res.send(allUsers);
});

router.post("/oneUser", async (req, res) => {
  console.log(req.body.userId);
  // const allUsers = await user.readAllUsers();
  res.send(req.body.userId);
});

module.exports = router;

("http://localhost:5000/app/user/allUsers");
("http://localhost:5000/app/user/oneUser");
("http://localhost:5000/app/user/newUser/?name:roye&?lname:");

("https://www.youtube.com/watch ? v =_UeWGi6acyY & list = RD_UeWGi6acyY & start_radio = 1");

// let email = ////
//   axios.get("http://localhost:5000/app/user/allUsers" + email).then((res) => {
//     console.log(res.data);
//   });
