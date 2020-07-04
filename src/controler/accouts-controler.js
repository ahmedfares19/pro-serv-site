const accountsDAO = require("../DAO/accounts-DAO");
const userAccount = new Object();

userAccount.userSignUp = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const email = data.email;
      const fullName = data.fullname;
      const password = data.password;
      const user = await accountsDAO.getAccountByEmail(email);
      if (user) {
        console.log("exits");
        resolve({
          message: "user already exists",
        });
      } else {
        console.log("new user");
        const user = await accountsDAO.addNewUser(email, fullName, password);
        resolve(user);
      }
    } catch (err) {
      resolve(err);
    }
  });
};
userAccount.userLogIn = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const email = data.email;
      const password = data.password;
      const user = await accountsDAO.login(email, password);
      
      if(user) {
        resolve(user);
      } else {
        resolve({message:"not exist"});
      }
     
    } catch (err) {
      resolve(err);
    }
  });
};

module.exports = userAccount;
