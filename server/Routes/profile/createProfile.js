const Profile = require("../../Models/profile.js");

const createProfile = async (req, res) => {
  let errorCode = null;
  try {
    // extracting all the components of profile
    const {
      bio,
      profilePic,
      education,
      project,
      achievement,
      experience,
      skills,
      socials,
    } = req.body;

    // extracting user credentials
    let { username, name, email } = req.user.user;
    username = username.toLowerCase();
    email = email.toLowerCase();

    // finding if profile already exists or not
    const isExists = await Profile.findOne({ $or: [{ username }, { email }] });
    if (isExists) {
      errorCode = 403;
      throw new Error("profile already exists");
    }

    // creating new profile
    const profile = new Profile({
      username,
      name,
      email,
      bio,
      profilePic,
      education,
      project,
      achievement,
      experience,
      skills,
      socials,
    });

    // saving new profile
    await profile
      .save()
      .then((profile) => {
        res.status(200).json({ profile });
      })
      .catch((err) => {
        throw new Error(err.message);
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

module.exports = createProfile;
