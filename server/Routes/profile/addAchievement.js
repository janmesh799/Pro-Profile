const Profile = require("../../Models/profile");

const addAchievement = async (req, res) => {
  let errorCode = null;
  try {
    // extracting newEducation from body and username from req.user
    const newAchievement = req.body;
    const username = req.user.user.username;

    // finding profile
    let profile = await Profile.findOne({ username });
    if (!profile) {
      errorCode = 404;
      throw new Error("Profile not found");
    }

    // adding new achievement to the profile.achievement
    profile.achievement.push(newAchievement);

    // saving the updated profile
    await profile
      .save()
      .then((profile) => {
        return res.status(200).json({
          success: true,
          message: "Achievement Added Successfully",
        });
      })
      .catch((err) => {
        errorCode = 500;
        throw new Error("Achievement addition failed due to" + err.message);
      });
  } catch (err) {

    // sending error if any occurs
    return res.status(errorCode || 500).json({
      success: false,
      message: "Internal server Error",
      error: err.message,
    });
  }
};
module.exports = addAchievement;
