const Profile = require("../../Models/profile");

const deleteExperience = async (req, res) => {
  let errorCode = null;
  try {
    // extracting username and experienceId
    const username = req.user.user.username;
    const experienceId = req.headers.experienceid;

    // finding profile if exists
    const profile = await Profile.findOne({ username });
    if (!profile) {
      errorCode = 404;
      throw new Error("Profile not found");
    }

    // deleting the targeted experience
    let newExperience = [];
    for (let i = 0; i < profile.experience.length; i++) {
      if (experienceId === profile.experience[i]._id.toHexString()) continue;
      newExperience.push(profile.experience[i]);
    }
    profile.experience = newExperience;

    // saving updated profile
    profile
      .save()
      .then(() => {
        res
          .status(200)
          .json({ success: true, message: "Experience deleted successfully" });
      })
      .catch((err) => {
        throw new Error(err.message);
      });
  } catch (err) {
    // sending errors if any occurs
    res.status(errorCode || 500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

module.exports = deleteExperience;
