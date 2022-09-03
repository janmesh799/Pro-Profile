const Profile = require("../../Models/profile");

const getprofile = async (req, res) => {
  //extracting username from body
  const username = req.body.username;

  //finding user with the given username
  const user = await Profile.findOne({ username: username });

  //if user is not found, then sending response as  success = false, error message and status code as 404
  if (!user) {
    res.json({ success: false, message: "username not found" }).status(404);
  }

  //if user is found, sending response as success = false, and user details
  else {
    res.json({ success: true, user });
  }
};

module.exports = getprofile;
