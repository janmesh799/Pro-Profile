const Profile = require("../../Models/profile");

const editAchievement= async (req, res) => {
  let errorCode = null;
  try {
    const username = req.user.user.username;
    const achievementId = req.headers.achievementid;
    const achievement = req.body;

    // finding profile if exists
    const profile = await Profile.findOne({ username });
    if (!profile) {
      errorCode = 404;
      throw new Error("Profile not found");
    }
    let flag = true;
    for (let i = 0; i < profile.achievement.length; i++) {
      if (profile.achievement[i]._id != achievementId) {
        continue;
      }
      flag = false;
      profile.achievement[i] = achievement;
    }
    if (flag) {
      errorCode = 404;
      throw new Error("Achievement Not found");
    }
    await profile
      .save()
      .then(() => {
        return res
          .status(200)
          .json({ success: true, message: "Achievement Edited" });
      })
      .catch((err) => {
        throw new Error("Can't edit Achievement due to ", err.message);
      });
  } catch (err) {
    res.status(errorCode || 500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

module.exports = editAchievement;
