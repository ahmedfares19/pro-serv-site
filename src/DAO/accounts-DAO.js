const User = require("../db/models/users");
const userMapper = require("../utils/mappers/user.mapper")
const AccountDAO = new Object();
AccountDAO.getAccountByEmail = async (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await User.findOne({ email });
      resolve(user);
    } catch (err) {
      reject(err);
    }
  });
};

AccountDAO.addNewUser = async (email, fullName, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = new User({ email: email, fullName, password });
      user = await user.save();
      console.log({ user });
      resolve(user);
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};

AccountDAO.login = async (email, password) => {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await User.findByCredentials(email,password)
        const token = await user.generateAuthToken();
        const userMapped = userMapper.mapUser(user , token);
        user.tokens.push({token:token})
        const newUser = await user.save()
        console.log(userMapped);
        // const loginUser = await user.save();
        resolve(userMapped);
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  };


module.exports = AccountDAO;
