const Profile = require("../../Models/profile");
const addEducation = async (req, res) => {
  const username = req.user.username;
  const EducationToAdd = req.body;
  let profile = await Profile.findOne({ username });
  profile.education.concat(EducationToAdd);
  let updatedProflie = await Profile.findOneAndUpdate({ username }, profile, {
    returnOriginal: false,
  });
  res.json({ success: true, updatedProfile });
};
