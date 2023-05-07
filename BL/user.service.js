const userDL = require("../DL/user/user.controller");
// const productDL = require("../DL/product/product.controller");

("https://roye/user/newUser");

const data = {
  email: "epg@gmail.com",
  password: "12345",
  gender: "male",
  fName: "joni",
  lName: "david",
  dob: "1990-10-05T22:00:00.000+00:00",
};

async function createNewUser(data) {
  try {
    if (!data.email || !data.password || !data.gender) return "data missed";

    const ifExist = await userDL.read({ email: data.email });

    if (ifExist[0]) return "the user exist";

    const createUser = await userDL.create(data);

    return "user created";
  } catch (error) {
    console.log(error);
  }
}

async function ifExist(email) {
  try {
    if (!email) return "data missed";

    const ifExist = await userDL.read({ email: email });
    if (ifExist) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
}
async function readAllUsers() {
  try {
    const users = await userDL.readAll();
    return users;
  } catch (error) {
    console.log(error);
  }
}

const user = {
  email: "epg@gmail.com",
};
const dataUser = {
  fName: "ori",
};

async function updateUser(user, data) {
  try {
    if (!user.email || !data) {
      console.log("data missed");
      return;
    }

    const update = await userDL.update(user, data);
    console.log(update);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { updateUser, readAllUsers, createNewUser, ifExist };

//ליצור יוזר חדש
// לעדכן שדה מסויים
// למחוק יוזר
//למצוא יוזר

// createNewUser(data);

// updateUser({ email: "epg@gmail.com" });
// updateUser(user,dataUser)
