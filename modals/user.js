const path = require("path");
const fs = require("fs");
const bcrypt = require("bcrypt");
const jsonFilePath = path.join(process.cwd(), "data", "user.json");
const readData = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(jsonFilePath, (err, data) => {
      if (err) {
        return reject(err);
      }
      resolve(JSON.parse(data.toString()));
    });
  });
};
const writeData = (data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(jsonFilePath, JSON.stringify(data,null,2), (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
};
exports.createUser = async (email, password) => {
  try {
    const users = await readData();
    const matched = users.find(u => u.email === email);
    if (matched) {
      throw new Error("user already exist!");
    } else {
      const userId = Date.now();
      const hashpassword = await bcrypt.hash(password,10)

      await writeData([...users, { email, password:hashpassword, userId }]);
    }
  }
  catch (err) {
    throw err;

  }
};
exports.findUser = async (email) => {
  try {
    const users = await readData();
    const matched = users.find(u => u.email === email);
    return matched
  }
  catch (err) {
    throw err;

  }
}