const { createuser, loginuser } = require("../models/user")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');


exports.signup = async (email, password) => {
    try {
        await createuser(email, password)
    } catch (error) {
        throw error
    }

}

exports.login = async (email, password) => {
    try {
        const user = await loginuser(email, password)
        if (!user) {
            return "wrong email or password "
        }
        const ifmatched = await bcrypt.compare(password, user.password);
        
        if (ifmatched) {
            const  token = jwt.sign({email }, 'test');

            return {token}
        } else {
            return "wrong email or password "
        }

    } catch (error) {
       console.log(error);
       
    }
}