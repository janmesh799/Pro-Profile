const Profile = require("../../Models/profile");

const editProfile = async (req, res) => {
  //extracting username from req, which we got through middleware
  const username = req.user.username;

  //extracting updatedprofile from req.body
  const updatedProfile = req.body;

  //finding and updating the profile
  const update = await Profile.findOneAndUpdate({ username }, updatedProfile, {
    returnOriginal: false,
  });

  //sending back the response with success = true and the updated profile
  res.json({ success: true, update });
};
module.exports = editProfile;
