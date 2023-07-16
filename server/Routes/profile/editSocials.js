const Profile = require("../../Models/profile");

const editSocials = async (req, res) => {
  let errorCode = null;
  try {
    const username = req.user.user.username;
    const newSocials = req.body;
    const profile = await Profile.findOne({ username });
    if (!profile) {
      errorCode = 404;
      throw new Error("Profile not found");
    }
    profile.socials = newSocials;
    profile
      .save()
      .then(() => {
        return res
          .status(200)
          .json({ success: true, message: "socials updated successfully" });
      })
      .catch((err) => {
        throw new Error("Socials updation failed due to ", err.message);
      });
  } catch (err) {
    res.status(errorCode || 500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

module.exports = editSocials;
