const express = require("express");
const router = express.Router();
const User = require("./../Models/User");
const fetchUser = require("../middleware/fetchUser");
const createProfile = require("./profile/createProfile.js");
const updateProfile = require("./profile/updateProfile.js");
const getProfile = require("./profile/getProfile.js");
const addEducation = require("./profile/addEducation");
const deleteEducation = require("./profile/deleteEducation");
const addExperience = require("./profile/addExperience");
const deleteExperience = require("./profile/deleteExperience");
const addProject = require("./profile/addProject");
const deleteProject = require("./profile/deleteProject");

// @Route: POST /api/profile/createProfile
// @Desc: Create a new profile
// @Access: Private
// @data: body({bio,profilePic,educations,projects,achievements,experience,skills,socials}), headers({authToken})
router.post("/createProfile", fetchUser, createProfile);

//@Route: POST /api/profile/updateProfile
//@Desc: Update a profile
//@Access: Private
//@data: body({bio,profilePic,educations,projects,achievements,experience,skills,socials}), headers({authToken})
router.post("/updateProfile", fetchUser, updateProfile);

//@Route: GET /api/profile/getProfile
//@Desc: Get a profile
//@Access: public
//@data: headers({username})
router.get("/getProfile", getProfile);

//@Route: POST /api/profile/addEducation
//@Desc: adding new education
//@Access: private
//@data: headers({authToken}), body({education})
router.post("/addEducation", fetchUser, addEducation);

//@Route: DELETE /api/profile/deleteEducation
//@Desc: deleting education
//@Access: private
//@data: headers({authToken, educationId})
router.delete("/deleteEducation", fetchUser, deleteEducation);

//@Route: POST /api/profile/addExperience
//@Desc: adding new Experience
//@Access: private
//@data: headers({authToken}), body({experience})
router.post("/addExperience", fetchUser, addExperience);

//@Route: DELETE /api/profile/deleteExperience
//@Desc: deleting experience
//@Access: private
//@data: headers({authToken, experienceId})
router.delete("/deleteExperience", fetchUser, deleteExperience);

//@Route: POST /api/profile/addExperience
//@Desc: adding new Experience
//@Access: private
//@data: headers({authToken}), body({experience})
router.post("/addProject", fetchUser, addProject);

//@Route: DELETE /api/profile/deleteExperience
//@Desc: deleting experience
//@Access: private
//@data: headers({authToken, experienceId})
router.delete("/deleteProject", fetchUser, deleteProject);

module.exports = router;
