const Profile = require('../../Models/profile.js');

const createProfile = (req, res) => {
    const { bio, profilePic, education, project, achievement, experience, skills, socials } = req.body;
    const { username, name, email } = req.user;
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
    profile.save()
        .then((profile) => {
            res.status(200).send(profile);
        }
        )
        .catch((err) => {
            res.status(500).send(err);
        }
        );
};



module.exports = createProfile;