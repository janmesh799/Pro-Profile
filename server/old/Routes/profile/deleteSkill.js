const Profile = require("../../Models/profile");

const deleteSkill = async (req, res) => {
  let errorCode = null;
  try {
    const username = req.user.user.username;
    const skill = req.headers.skill;
    const profile = await Profile.findOne({ username });
    if (!profile) {
      errorCode = 404;
      throw new Error("Profile not found");
    }
    let newSkills = [];
    for (let i = 0; i < profile.skills.length; i++) {
      if (profile.skills[i] === skill) continue;
      newSkills.push(profile.skills[i]);
    }
    profile.skills = newSkills;
    profile
      .save()
      .then(() => {
        res
          .status(200)
          .json({ success: true, message: "Skill deleted successfully" });
      })
      .catch((err) => {
        errorCode = 500;
        throw new Error("Skill deletion failed due to " + err.message);
      });
  } catch (err) {
    res.status(errorCode || 500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
};
module.exports = deleteSkill;
