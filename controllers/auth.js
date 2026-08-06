const { createUser, findUser } = require("../models/user");

exports.createUser = async (email, password) => {
  try {
    await createUser(email, password);
  } catch (err) {
    throw err;
  }
};
exports.login = async (email,password) => {
  try {
    const user = await findUser(email);
    if(user.password===password){
        return "Login Sucessfully!"
    }
    return "wrong email or password"
  } catch (err) {
    throw err;
  }
};