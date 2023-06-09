
const bcrypt = require('bcryptjs');
const User = require('../../Models/User');


const updatePassword = async (req, res) => {
    try {
        // extracting oldPassword and newPassword and userid
        const { oldPassword, newPassword } = req.body;
        const { id } = req.user;

        // finding user
        const user = await User.findById(id);
        if (!user) {
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }
        // authenticating old password
        const passwordCompare = await bcrypt.compare(oldPassword, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }

        // generating salt and hashing new password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(newPassword, salt);

        // 
        await user.save();
        res.status(200).json({ success: true, message: "Password updated successfully" });;
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = updatePassword;