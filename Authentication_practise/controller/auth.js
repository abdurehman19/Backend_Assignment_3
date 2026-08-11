const { createuser, loginuser } = require("../models/user")
const bcrypt = require("bcrypt")

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
        const ifmatched = bcrypt.compare(password, user.password);

        if (ifmatched) {
            return "login successfull"
        } else {
            return "wrong email or password "
        }

    } catch (error) {

    }
}