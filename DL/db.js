const mongoose = require("mongoose");
require("dotenv").config();
const Mongo_Url = process.env.MONGO_URL;

async function connect() {
  try {
    mongoose.connect(
      Mongo_Url,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (err) => {
        if (err) throw "Eror : " + err;
        console.log(
          "connection success",
          state,
          mongoose.connection.readyState
        );
      }
    );
  } catch (err) {
    console.log(err);

    throw err;
  }
}

module.exports = { connect };
