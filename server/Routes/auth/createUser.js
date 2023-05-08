const jwt = require('jsonwebtoken');
const secKey = process.env.SECKEY;
const bcrypt = require('bcryptjs');

const User = require('../../Models/User');

const createUser = async (req, res) => {
    let errorCode = null;
    let { name, email, password, username } = req.body;
    try {
        email = email.toLowerCase();
        username = username.toLowerCase();

        const user = await User.findOne({
            $or: [{ email }, { username }]
        });
        if (user) {
            errorCode = 400;
            throw new Error("Sorry! this username or email already exists")
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(password, salt);
        const newUser = new User({ name, email, password: secPass, username });
        await newUser.save().then((newUser) => {
            const data = {
                user: {
                    id: newUser.id,
                    username: newUser.username,
                    email: newUser.email,
                    name: newUser.name
                }
            }
            const authToken = jwt.sign(data, secKey);
            res.status(200).json({ success: true, message: "User Created successfully", authToken, newUser });
        }).catch(err => {
            throw new Error(err.message);
        })
    } catch (err) {
        return res.status(errorCode || 500).json({ success: false, message: "Internal server Error", error: err.message })
    }
}
module.exports = createUser;