const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../data/key.js");

exports.verify = (req, res, next) => {
  jwt.verify(req.headers.token, SECRET_KEY, (err, decoded) => {

    if (err) {
      return res.status(401).send("Auth fail");
    }

    console.log(decoded.email);

    req.user = decoded;

    next();
  });
};