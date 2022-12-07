const userDL = require("../DL/user/user.controller");
const productDL = require("../DL/product/product.controller");

async function creatNewUser(data) {
  //האם יש מייל וסיסמא למשתמש הנכנס?
  if (!data.email || !data.password) throw "missing data";
  //האם יש משתמש קיים עם המייל הזה?
  let user = await userDL.read({ email: data.email });
  if (user) throw "user is exist";
  // אם לא צור לי משתמש חדש
  let res = await userDL.creat(data);
  return res;
}

// יצירה של מןצר חדש
async function creatProduct(data) {
  //האם יש בערך מהה יחודי וגם מחיר וגם תמונה
  if (!data.id && !data.price && !data.image) throw "missing data";
  // בדוק האם קיים ואם כן זרוק שגיאה
  let product = await productDL.read({ id: data.id });
  if (user) throw "product is exist";
  //אם הכל טוב צור מוצר
  let res = await productDL.creat(data);
  return res;
}

// עדכון של פרטי מוצר
async function updateProduct(data) {
  //בדוק האם קיים מזהה יחודי בערך הנקלט
  if (!data.id) throw "id missing";
  // בדוק האם קיים מוצר במאגר שתואם את המזהה הנל
  let product = await productDL.read({ id: data.id });
  // אם אין אחד כזה זרוק שגיאה
  if (!product) throw "product not exist";
  // אם יש אחד כזה תעדכן
  let res = await productDL.update({ id: data.id }, data);

  return res;
}

//נשאר לי לבנות הזמנות שכבת מודל וקונטרולר עם חיבור למוצרים וליוזרים ו
//ואז להוסיף פה פונקציות חסרות
