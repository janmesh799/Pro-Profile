const User = require('../../Models/User')
const Profile = require('../../Models/profile')
const addEducation = async (req, res) => {
    let errorCode = null;
    try {
        const newEducation = req.body;
        const username = req.user.user.username;
        let profile = await Profile.findOne({ username })
        if (!profile) {
            errorCode = 404;
            throw new Error("Profile not found");
        }
        profile.education.push(newEducation);
        await profile.save().then((profile) => {
            return res.status(200).json({ success: true, message: "Education Added Succesfully", profile });
        }).catch((err) => {
            errorCode = 500;
            throw new Error("Education addition failed due to" + err.message);
        })

    } catch (err) {
        return res.status(errorCode || 500).json({ success: false, message: "Internal server Error", error: err.message })
    }
}
module.exports = addEducation;