const Profile = require("../../Models/profile");

const editSkills = async (req, res) => {
  let errorCode = null;
  try {
    const username = req.user.user.username;
    const skills = req.body;
    const profile = await Profile.findOne({ username });
    if (!profile) {
      errorCode = 404;
      throw new Error("Profile not found");
    }
    profile.skills = skills;
    await profile
      .save()
      .then(() => {
        return res
          .status(200)
          .json({ success: true, message: "Skills Edited Successfully" });
      })
      .catch((err) => {
        throw new Error("Skills saving failed due to , ", err.message);
      });
  } catch (err) {
    res.status(errorCode || 500).json({
      success: false,
      message: "Internal Server Error",
      err: err.message,
    });
  }
};


module.exports = editSkills;