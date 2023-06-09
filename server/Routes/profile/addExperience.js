const Profile = require('../../Models/profile')

const addExperience = async (req, res) => {
    let errorCode = null;
    try {
        const username = req.user.user.username;
        const experience = req.body.experience;
        console.log(experience)
        let profile = await Profile.findOne({ username });
        if (!profile) {
            errorCode = 404;
            throw new Error("Profile not found");
        }
        profile.experience.push(experience);
        profile.save().then(() => {
            res.status(200).json({ success: true, message: "Experience added successfully" });
        }).catch(err => {
            throw new Error(err.message);
        })

    } catch (err) {
        res.status(errorCode || 500).json({ success: false, message: "Internal Server Error", error: err.message })
    }
}
module.exports = addExperience;