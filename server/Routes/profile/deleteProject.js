const Profile = require("../../Models/profile");

const deleteProject = async (req, res) => {
  let errorCode = null;
  try {
    // extracting username and projectId
    const username = req.user.user.username;
    const projectId = req.headers.projectid;

    // finding profile if exists
    const profile = await Profile.findOne({ username });
    if (!profile) {
      errorCode = 404;
      throw new Error("Profile not found");
    }

    // deleting the targeted project
    let newProject = [];
    for (let i = 0; i < profile.project.length; i++) {
      if (projectId === profile.project[i]._id.toHexString()) continue;
      newProject.push(profile.project[i]);
    }
    profile.project = newProject;

    // saving updated profile
    profile
      .save()
      .then(() => {
        res
          .status(200)
          .json({ success: true, message: "Project deleted successfully" });
      })
      .catch((err) => {
        throw new Error(err.message);
      });
  } catch (err) {
    // sending errors if any occurs
    res.status(errorCode || 500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

module.exports = deleteProject;
