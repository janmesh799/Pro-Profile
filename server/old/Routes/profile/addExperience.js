const Profile = require("../../Models/profile");

const addExperience = async (req, res) => {
  let errorCode = null;
  try {
    // extracting username and experience
    const username = req.user.user.username;
    const experience = req.body.experience;

    // finding profile by username
    let profile = await Profile.findOne({ username });
    if (!profile) {
      errorCode = 404;
      throw new Error("Profile not found");
    }

    // adding new experience
    profile.experience.push(experience);

    // saving updated profile
    profile
      .save()
      .then(() => {
        res
          .status(200)
          .json({ success: true, message: "Experience added successfully" });
      })
      .catch((err) => {
        throw new Error(err.message);
      });
  } catch (err) {

    // sending error if any occurs
    res.status(errorCode || 500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
};
module.exports = addExperience;
