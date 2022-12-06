const { ProfilingLevel } = require('mongodb');
const Profile = require('../../Models/profile.js');

const updateProfile = async (req, res) => {
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
        const upate = await Profile.findByIdAndDelete(oldProfile._id);
        newProfile.save()
            .then(() => {
                res.send("updated");
            }).catch((err) => {
                res.send(err)
            })


    }
};

module.exports = updateProfile;