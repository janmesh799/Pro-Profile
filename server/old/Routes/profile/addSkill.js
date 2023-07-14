const Profile = require("../../Models/profile");

const addSkill = async (req, res) => {
  let errorCode = null;
  try {
    const username = req.user.user.username;
    const skill = req.body.skill;

    const profile = await Profile.findOne({ username });
    if (!profile) {
      errorCode = 404;
      throw new Error("Profile not found");
    }
    profile.skills.push(skill);
    profile
      .save()
      .then(() => {
        res
          .status(200)
          .json({ success: true, message: "Skill added successfully" });
      })
      .catch((err) => {
        errorCode = 500;
        throw new Error("skill addition failed due to " + err.message);
      });
  } catch (err) {
    res.status(errorCode || 500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
};
module.exports = addSkill;
