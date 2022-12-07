const userDate = require("./user.model");

async function creat(data) {
  let res = await userDate.create(data);
  console.log(res);
}
async function read(filter, proj) {
  let res = await userDate.find(filter, proj);
  console.log(res);
}

async function update(id, newData) {
  let res = await userDate.updateMany({ _id: id }, { newData });
  console.log(res);
}

async function del(userId) {
  let res = await userDate.updateOne(userId, { isActiv: false });
  console.log(res);
}

module.exports = { creat, read, update, del };

// const creat = async () => {

//   };

//   let user = {
//     fName: "yoni",
//     lName: "eee",
//     email: "uuuu@walla",
//     password: 3456,
//     dob: new Date(1990, 9, 6),
//     gender: "female",
//   };

//   // creat();

//   const read = async () => {
//     let res = await userDate.find({ isActiv: true, gender: "male" });
//     console.log(res);
//   };

//   // read();

//   const update = async () => {
//     let res = await userDate.updateMany(
//       { gender: "male" },
//       { Permissions: "editor" }
//     );
//     console.log(res);
//   };

//   // update();

//   const del = async (userId) => {
//     let res = await userDate.updateOne({ _id: userId }, { isActiv: false });
//     console.log(res);
//   };

//   // del("638754114a479776adb118c6");
