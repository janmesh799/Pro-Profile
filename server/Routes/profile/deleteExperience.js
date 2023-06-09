const Profile = require("../../Models/profile");

const deleteExperience = async (req, res) => {
    let errorCode = null;
    try {
        const username = req.user.user.username;
        const experienceId = req.headers.experienceid;
        const profile = await Profile.findOne({ username });
        if (!profile) {
            errorCode = 404;
            throw new Error("Profile not found");
        }
        let newExperince = [];
        for (let i = 0; i < profile.experience.length; i++) {
            if (experienceId === profile.experience[i]._id.toHexString()) continue;
            newExperince.push(profile.experience[i]);
        }
        profile.experience = newExperince
        profile.save().then(() => {
            res.status(200).json({ success: true, messaage: "Experience deleted successfully" });
        }).catch(err => {
            throw new Error(err.message)
        })

    } catch (err) {
        res.status(errorCode || 500).json({ success: false, message: "Internal Server Error", error: err.message })
    }
}

module.exports = deleteExperience;