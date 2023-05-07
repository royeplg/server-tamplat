const mongoose = require("mongoose");


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
  create: {
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
    required: false,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

const userData = mongoose.model("user", userSchema);

module.exports = userData;
