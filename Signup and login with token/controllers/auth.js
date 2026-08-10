const { createUser, findUser } = require("../modals/user");
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');
const { SECRET_KEY } = require("../data/key");



exports.createUser = async (email, password) => {
  try {
    await createUser(email, password);
  } catch (err) {
    throw err;
  }
};
exports.login = async (email, password) => {
  try {
    const user = await findUser(email);

    if (!user) {
      return "Wrong email or password";
    }
    const ifmatched = bcrypt.compare(password, user.password)
    if (ifmatched) {
      var token = jwt.sign({ email }, SECRET_KEY);
      return { token }

    }

    return "Wrong email or password";
  } catch (err) {
    throw err;
  }
};