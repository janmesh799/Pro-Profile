const jwt = require('jsonwebtoken');
const secKey = process.env.SECKEY;
const bcrypt = require('bcryptjs');

const User = require('../../Models/User');
const Profile = require('../../Models/profile')

const createUser = async (req, res) => {
    const { name, email, password, username } = req.body;
    try {
        let user = await User.findOne({
            $or: [{ email }, { username }]
        });
        if (user) {
            return res.status(400).json({
                error: "Sorry this username or email already exists"
            })
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(password, salt);
        user = await User.create({
            name,
            email,
            password: secPass,
            username
        });
        const data = {
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                name: user.name
            }
        }
        const intitalProfile = new Profile({
            username, name, email
        });
        await intitalProfile.save();
        const authToken = jwt.sign(data, secKey);
        res.json({ authToken });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}
module.exports = createUser;