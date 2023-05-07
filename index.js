const express = require("express");
const cors = require("cors");
const mainRouter = require("./router/mainRouter");
const auth = require("./auth");
const login = require("./router/loginRouter");

const app = express();
app.use(cors());
app.use(express.json());
require("../db").connect();
let port = process.env.PORT;

app.use("/app/login", login);
app.use("/app/stor", auth.verifyToken, mainRouter);

app.listen(port, () => console.log("Server is running at Port :" + port));

/////   layers:

/////      1 server  (router)
/////      2 BL services
/////      3 DL - controller
/////      4 DL - model
/////      5 DB - connect to DB
