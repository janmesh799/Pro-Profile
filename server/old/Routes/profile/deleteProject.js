const Profile = require("../../Models/profile");
const deleteProject = async (req, res) => {
  let errorCode = null;
  try {
    // extracting projectId and username
    const projectId = req.headers.projectid;
    const username = req.user.user.username;

    // finding profile if exists
    const profile = await Profile.findOne({ username });
    if (!profile) {
      errorCode = 404;
      throw new Error("Profile not found");
    }

    // finding and deleting the targeted project
    const project = profile.project;
    let updatedProject = [];
    for (let i = 0; i < project.length; i++) {
      if (projectId === project[i]._id.toHexString()) continue;
      updatedProject.push(project[i]);
    }
    profile.project = updatedProject;

    // saving updated project
    profile
      .save()
      .then(() => {
        res.status(200).json({ success: true, message: "project deleted" });
      })
      .catch((err) => {
        errorCode = 500;
        throw new Error("project Deletion failed");
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
