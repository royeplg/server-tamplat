const mongoose = require("mongoose");
require("../db").connect();

const userSchema = new mongoose.Schema({
  fName: {
    type: String,
  },
  lName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  dob: {
    type: Date,
  },
  creat: {
    type: Date,

    default: Date.now,
  },
  Permissions: {
    type: String,
    enum: ["admin", "editor", "viewer"],
    default: "viewer",
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
  },
  isActiv: {
    type: Boolean,
    default: true,
  },
});

const userDate = mongoose.model("user", userSchema);

module.exports = userDate;
