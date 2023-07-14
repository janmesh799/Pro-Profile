const Profile = require("../../Models/profile");

const editExperience = async (req, res) => {
  let errorCode = null;
  try {
    const username = req.user.user.username;
    const experienceId = req.headers.experienceid;
    const experience = req.body;

    // finding profile if exists
    const profile = await Profile.findOne({ username });
    if (!profile) {
      errorCode = 404;
      throw new Error("Profile not found");
    }
    let flag = true;
    for (let i = 0; i < profile.experience.length; i++) {
      if (profile.experience[i]._id != experienceId) {
        continue;
      }
      flag = false;
      profile.experience[i] = experience;
    }
    if (flag) {
      errorCode = 404;
      throw new Error("Experience Not found");
    }
    await profile
      .save()
      .then(() => {
        return res
          .status(200)
          .json({ success: true, message: "Experience Edited" });
      })
      .catch((err) => {
        throw new Error("Can't edit Experience due to ", err.message);
      });
  } catch (err) {
    res.status(errorCode || 500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

module.exports = editExperience;
