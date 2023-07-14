const User = require("../../Models/User");
const Profile = require("../../Models/profile");
const deleteEducation = async (req, res) => {
  let errorCode = null;
  try {
    // extracting educationId and username
    const educationId = req.headers.educationid;
    const username = req.user.user.username;

    // finding profile if exists
    const profile = await Profile.findOne({ username });
    if (!profile) {
      errorCode = 404;
      throw new Error("Profile not found");
    }

    // finding and deleting the targeted education
    const education = profile.education;
    let updatedEducation = [];
    for (let i = 0; i < education.length; i++) {
      if (educationId === education[i]._id.toHexString()) continue;
      updatedEducation.push(education[i]);
    }
    profile.education = updatedEducation;

    // saving updated education
    profile
      .save()
      .then(() => {
        res.status(200).json({ success: true, message: "Education deleted" });
      })
      .catch((err) => {
        errorCode = 500;
        throw new Error("Education Deletion failed");
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

module.exports = deleteEducation;
