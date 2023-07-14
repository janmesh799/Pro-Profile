const Profile = require("../../Models/profile");

const editProject = async (req, res) => {
  let errorCode = null;
  try {
    const username = req.user.user.username;
    const projectId = req.headers.projectid;
    const project = req.body;
console.log(projectId)
    // finding profile if exists
    const profile = await Profile.findOne({ username });
    if (!profile) {
      errorCode = 404;
      throw new Error("Profile not found");
    }
    let flag = true;
    for (let i = 0; i < profile.project.length; i++) {
      if (profile.project[i]._id != projectId) {
        continue;
      }
      flag = false;
      profile.project[i] = project;
    }
    if (flag) {
      errorCode = 404;
      throw new Error("Project Not found");
    }
    await profile
      .save()
      .then(() => {
        return res
          .status(200)
          .json({ success: true, message: "Project Edited" });
      })
      .catch((err) => {
        throw new Error("Can't edit Project due to ", err.message);
      });
  } catch (err) {
    res.status(errorCode || 500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

module.exports = editProject;
