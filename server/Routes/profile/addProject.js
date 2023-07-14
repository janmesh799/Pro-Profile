const Profile = require("../../Models/profile");

const addProject = async (req, res) => {
  let errorCode = null;
  try {
    // extracting username and project
    const username = req.user.user.username;
    const project = req.body;

    // finding profile by username
    let profile = await Profile.findOne({ username });
    if (!profile) {
      errorCode = 404;
      throw new Error("Profile not found");
    }

    // adding new project
    profile.project.push(project);

    // saving updated profile
    profile
      .save()
      .then(() => {
        res
          .status(200)
          .json({ success: true, message: "Project added successfully" });
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
module.exports = addProject;
