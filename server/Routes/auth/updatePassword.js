
const bcrypt = require('bcryptjs');
const User = require('../../Models/User');
const updatePassword = async(req, res) => {
    const { oldPassword, newPassword } = req.body;
    const { id } = req.user;
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }
        console.log(user)
        const passwordCompare = await bcrypt.compare(oldPassword, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(newPassword, salt);
        await user.save();
        res.json({ "success": "Password updated successfully" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = updatePassword;