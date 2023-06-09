const Profile = require("../../Models/profile");
const addEducation = async (req, res) => {
  let errorCode = null;
  try {
    // extracting newEducation from body and username from req.user
    const newEducation = req.body;
    const username = req.user.user.username;

    // finding profile
    let profile = await Profile.findOne({ username });
    if (!profile) {
      errorCode = 404;
      throw new Error("Profile not found");
    }

    // adding new education to the profile.education
    profile.education.push(newEducation);

    // saving the updated profile
    await profile
      .save()
      .then((profile) => {
        return res.status(200).json({
          success: true,
          message: "Education Added Successfully",
          profile,
        });
      })
      .catch((err) => {
        errorCode = 500;
        throw new Error("Education addition failed due to" + err.message);
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
module.exports = addEducation;
