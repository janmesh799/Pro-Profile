const Profile = require("../../Models/profile");

const editEducation = async (req, res) => {
  let errorCode = null;
  try {
    const username = req.user.user.username;
    const educationId = req.headers.educationid;
    const education = req.body;

    // finding profile if exists
    const profile = await Profile.findOne({ username });
    if (!profile) {
      errorCode = 404;
      throw new Error("Profile not found");
    }
    let flag = true;
    for (let i = 0; i < profile.education.length; i++) {
      if (profile.education[i]._id != educationId) {
        continue;
      }
      flag = false;
      profile.education[i] = education;
    }
    if (flag) {
      errorCode = 404;
      throw new Error("Education Not found");
    }
    await profile
      .save()
      .then(() => {
        return res
          .status(200)
          .json({ success: true, message: "Education Edited" });
      })
      .catch((err) => {
        throw new Error("Can't edit Education due to ", err.message);
      });
  } catch (err) {
    res.status(errorCode || 500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

module.exports = editEducation;
