const mongoose = require("mongoose");
require("dotenv").config();
let mongoURL = process.env.MONGO_URL;
async function connect() {
  try {
    mongoose

      .connect( mongoURL , { useNewUrlParser: true })
      .then(() => {
        console.log("Connected to database");
      })
      .catch((error) => {
        console.error("Error connecting to database:", error.message);
      });
  } catch (err) {
    console.log(err);

    throw err;
  }
};

module.exports = { connect };
