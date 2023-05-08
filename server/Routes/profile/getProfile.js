const Profile = require('../../Models/profile');


const getProfile = async (req, res) => {
    let errorCode = null;
    try {
        const username = req.headers.username;
        const profile = await Profile.findOne({ username });
        if (!profile) {
            errorCode = 404;
            throw new Error("Profile not found")
        }
        res.status(200).json({ profile, success: true });
    } catch (error) {
        return res.status(errorCode || 500).json({ success: false, message: "Internal server Error", error: err.message })

    }
}
module.exports = getProfile;