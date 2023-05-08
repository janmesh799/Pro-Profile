const Profile = require('../../Models/profile.js');

const createProfile = async (req, res) => {
    let errorCode = null;
    try {
        const { bio, profilePic, education, project, achievement, experience, skills, socials } = req.body;
        const { username, name, email } = req.user;
        const isExists = await Profile.findOne({ $or: [{ username }, { email }] });
        if (isExists) {
            errorCode = 403;
            throw new Error("profile already exists");
        }
        const profile = new Profile({
            username,
            name,
            email,
            bio,
            profilePic,
            education,
            project,
            achievement,
            experience,
            skills,
            socials
        });
        await profile.save()
            .then((profile) => {
                res.status(200).json({ profile });
            }
            )
            .catch((err) => {
                throw new Error(err.message)
            });
    } catch (err) {
        return res.status(errorCode || 500).json({ success: false, message: "Internal server Error", error: err.message })
    }
};



module.exports = createProfile;