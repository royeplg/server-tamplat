const userData = require("./user.model");

async function createUser(data) {
  try {
    let res = await userData.create(data);
    return res;
  } catch (error) {
    console.log(error);
  }
}
async function read(filter, proj) {
  try {
    let res = await userData.find(filter, proj);
    return res;
  } catch (error) {
    console.log(error);
  }
}
async function readAll() {
  let res = await userData.find({});
  console.log(res);
  return res;
}

async function update(data, newData) {
  let res = await userData.updateMany(data, newData);
  console.log(res);
}

async function del(userId) {
  let res = await userData.updateOne(userId, { isActive: false });
  console.log(res);
}

module.exports = { createUser, read, update, del, readAll };



let user = {
  fName: "joni",
  lName: "uio",
  email: "ppuu@wweeee",
  password: 13456,
  dob: new Date(1990, 9, 6),
  gender: "female",
};



// create(user); יצירת מסמך חדש
//read({ email: "ppuu@wweeee" }); //קריאה של שדה יחודי
// read({ gender: "female" });קריאה של מספר מסמכים
// readAll();קריאה לכולם בעיקר לטסטים
// update({ email: "ppuu@wweeee" }, { isActive: false });
// del({ email: "uuuu@walla" });
