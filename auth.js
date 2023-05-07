const jwt = require("jsonwebtoken");

const secret = process.env.SECRET;

async function createToken(email) {
  const token = jwt.sign({ email }, secret, { expiresIn: "1h" });
  if (!token) console.log("token not created");
  return token;
}

async function verifyToken(req, res, next) {
  try {
    let token = req.headers.authorization.replace("Bearer ", "");

    console.log(token);
    let ifToken = await jwt.verify(token, secret, { expiresIn: "1h" });
    console.log(ifToken);
    if (ifToken) next();
  } catch (error) {
    res.send("no valid token");
  }
}

module.exports = { createToken, verifyToken };

/// example token
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoicm95ZUBycnIuY29tIiwiaWF0IjoxNjgyNjcyMTI5LCJleHAiOjE2ODI2NzU3Mjl9.0ZlHwEI1s75yXg0B8fgiptsfZpY2W3kccbMH0n08BRA";
