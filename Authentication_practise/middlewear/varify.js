
const jwt = require('jsonwebtoken');

const verify = (req, res, next) => {
    jwt.verify(req.headers.token, "test", (err, decoded) => {
        if (err) {
            return res.status(401).send("Auth fail")

        }
        console.log(decoded.email);

        req.user = decoded;

        next()

    })

}

module.exports=verify