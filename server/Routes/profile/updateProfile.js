const { ProfilingLevel } = require("mongodb");
const Profile = require("../../Models/profile.js");

const updateProfile = async (req, res) => {
  let errorCode = null;
  try {
    // extracting all the components of profile
    const {
      bio,
      profilePic,
      education,
      project,
      achievement,
      experience,
      skills,
      socials,
    } = req.body;
    let { username, name, email } = req.user;
    username = username.toLowerCase();
    email = email.toLowerCase();

    // finding the profile
    const oldProfile = await Profile.findOne({ username: username });
    if (!oldProfile) {
      res.status(400).send("No profile found");
    } else {
      // creating and new profile
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
        socials,
      });

      // updating the profile.
      await Profile.findByIdAndUpdate(oldProfile._id, newProfile, { new: true })
        .then((updatedProfile) => {
          // sending updated profile as response
          res.status(200).json({
            success: true,
            message: "Profile Updated",
            updatedProfile,
          });
        })
        .catch((err) => {
          errorCode = 500;
          throw new Error(err.message);
        });
    }
  } catch (err) {
    // sending errors if any exists.
    return res.status(errorCode || 500).json({
      success: false,
      message: "Internal server Error",
      error: err.message,
    });
  }
};

module.exports = updateProfile;
