const Profile = require("../../Models/profile");
const addProject = async (req, res) => {
  let errorCode = null;
  try {
    // extracting newProjecct from body and username from req.user
    const newProject = req.body;
    const username = req.user.user.username;
    // finding profile
    let profile = await Profile.findOne({ username });
    if (!profile) {
      errorCode = 404;
      throw new Error("Profile not found");
    }

    // adding new project to the profile.project
    profile.project.push(newProject);

    // saving the updated profile
    await profile
      .save()
      .then((profile) => {
        return res.status(200).json({
          success: true,
          message: "Project Added Successfully",
          profile,
        });
      })
      .catch((err) => {
        errorCode = 500;
        throw new Error("project addition failed due to" + err.message);
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
module.exports = addProject;
