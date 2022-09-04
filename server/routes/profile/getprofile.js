const Profile = require("../../Models/profile");

const getprofile = async (req, res) => {
  //extracting username from body
  // const username = req.husername;
  const username = req.header("username");

  //finding user with the given username
  const user = await Profile.findOne({ username: username });

  //if user is not found, then sending response as  success = false, error message and status code as 404
  if (!user) {
    res
      .status(404)
      .json({ success: false, message: "username not found", username: req.body });
  }

  //if user is found, sending response as success = true, and user details
  else {
    res.json({ success: true, user });
  }
};

module.exports = getprofile;
