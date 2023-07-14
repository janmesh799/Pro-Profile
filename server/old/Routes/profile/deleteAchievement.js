const Profile = require("../../Models/profile");

const deleteAchievement = async (req, res) => {
  let errorCode = null;
  try {
    // extracting educationId and username
    const educationId = req.headers.achievementid;
    const username = req.user.user.username;

    // finding profile if exists
    const profile = await Profile.findOne({ username });
    if (!profile) {
      errorCode = 404;
      throw new Error("Profile not found");
    }

    // finding and deleting the targeted achievement
    const achievement = profile.achievement;
    let updatedAchievement = [];
    for (let i = 0; i < achievement.length; i++) {
      if (educationId === achievement[i]._id.toHexString()) continue;
      updatedAchievement.push(achievement[i]);
    }
    profile.achievement = updatedAchievement;

    // saving updated achievement
    profile
      .save()
      .then(() => {
        res.status(200).json({ success: true, message: "Achievement deleted" });
      })
      .catch((err) => {
        errorCode = 500;
        throw new Error("Achievement Deletion failed");
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

module.exports = deleteAchievement;
