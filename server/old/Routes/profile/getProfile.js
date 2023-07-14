const Profile = require("../../Models/profile");

const getProfile = async (req, res) => {
  let errorCode = null;
  try {
    // extracting username from headers
    let username = req.headers.username;
    username = username.toLowerCase();

    // finding profile
    const profile = await Profile.findOne({ username });
    if (!profile) {
      errorCode = 404;
      throw new Error("Profile not found");
    }

    // sending profile
    res.status(200).json({ profile, success: true });
  } catch (error) {
    // sending errors if any occurs
    return res.status(errorCode || 500).json({
      success: false,
      message: "Internal server Error",
      error: error.message,
    });
  }
};
module.exports = getProfile;
