const { ProfilingLevel } = require('mongodb');
const Profile = require('../../Models/profile.js');

const updateProfile = async (req, res) => {
    let errorCode = null;
    try {
        const { bio, profilePic, education, project, achievement, experience, skills, socials } = req.body;
        const { username, name, email } = req.user;
        const oldProfile = await Profile.findOne({ username: username });
        if (!oldProfile) {
            res.status(400).send("No profile found");
        }
        else {
            const newProfile = new Profile({
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
            await Profile.findByIdAndUpdate(oldProfile._id, newProfile, { new: true }).then(updatedProfile => {

                res.status(200).json({ success: true, message: "Profile Updated", updatedProfile })
            }).catch((err) => {
                errorCode = 500;
                throw new Error(err.message);
            })
        }

    } catch (err) {
        return res.status(errorCode || 500).json({ success: false, message: "Internal server Error", error: err.message })

    }
};

module.exports = updateProfile;