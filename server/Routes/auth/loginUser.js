const User = require('../../Models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secKey = process.env.SECKEY;

const loginUser = async (req, res) => {
    let errorCode = null;
    let { email, password } = req.body;
    email = email.toLowerCase();
    try {
        let user = await User.findOne({ email });
        if (!user) {
            errorCode = 403;
            throw new Error("Please try to login with correct credentials")
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        console.log(passwordCompare)
        if (!passwordCompare) {
            errorCode = 403;
            throw new Error("Please try to login with correct credentials")
        }
        const data = {
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                name: user.name
            },
        }
        const authToken = jwt.sign(data, secKey);
        res.json({
            authToken, success: true, user: data.user, message: "Login Successful"
        });

    } catch (err) {
        return res.status(errorCode || 500).json({ success: false, message: "Internal server Error", error: err.message })
    }
}

module.exports = loginUser;