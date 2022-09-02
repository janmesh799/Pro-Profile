const Profile = require("../../Models/profile");
const addProfile = (req, res) => {
  const profileToAdd = req.body;
  profileToAdd.username = req.user.username;
  Profile.create(profileToAdd);
  res.json({ success: true });
};
module.exports = addProfile;
