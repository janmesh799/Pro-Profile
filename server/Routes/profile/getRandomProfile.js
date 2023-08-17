const Profile = require("../../Models/profile");

const getRandomProfile = async (req, res) => {
  let errorCode = null;
  try {
    const usernames = await Profile.find({
      username: { $exists: true },
    }).distinct("username");
    if (!usernames || !Array.isArray(usernames)) {
      errorCode = 404;
      throw new Error("No profiles found");
    }
    console.log("total profile = ",usernames.length)
    //get random index from array of length of all users in db
    var randIndex = Math.floor(Math.random() * (usernames.length) + 0);
    console.log(`Random Index: ${randIndex}`);
    res.status(200).json({ success: true, username: usernames[randIndex] });
  } catch (err) {
    res.status(errorCode || 500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

module.exports = getRandomProfile;
