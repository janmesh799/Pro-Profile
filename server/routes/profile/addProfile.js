const Profile = require("../../Models/profile");

const addProfile = (req, res) => {
  //extracting data from body to be added
  const profileToAdd = req.body;

  //retriving username from req, which was found using 'getuser' middleware
  profileToAdd.username = req.user.username;

  //creting preofile
  Profile.create(profileToAdd);

  //return response as success = true
  res.json({ success: true });
};
module.exports = addProfile;
