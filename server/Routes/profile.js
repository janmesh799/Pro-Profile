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
const editEducation = require("./profile/editEducation");
const editExperience = require("./profile/editExperience");
const addProject = require("./profile/addProject");
const editProject = require("./profile/editProject");
const deleteProject = require("./profile/deleteProject");
const editSkills = require("./profile/editSkills");
const addAchievement = require("./profile/addAchievement");
const editAchievement = require("./profile/editAchievement");
const deleteAchievement = require("./profile/deleteAchievement");

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

//@Route: PUT /api/profile/editEducation
//@Desc: editing education
//@Access: private
//@data: headers({authToken, educationId}), body({education})
router.put("/editEducation", fetchUser, editEducation);

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

//@Route: PUT /api/profile/editExperience
//@Desc: editing experience
//@Access: private
//@data: headers({authToken, experienceId}), body({experience})
router.put("/editExperience", fetchUser, editExperience);

//@Route: DELETE /api/profile/deleteExperience
//@Desc: deleting experience
//@Access: private
//@data: headers({authToken, experienceId})
router.delete("/deleteExperience", fetchUser, deleteExperience);

//@Route: POST /api/profile/addProject
//@Desc: adding new Project
//@Access: private
//@data: headers({authToken}), body({project})
router.post("/addProject", fetchUser, addProject);

//@Route: PUT /api/profile/editProject
//@Desc: editing project
//@Access: private
//@data: headers({authToken, projectId}), body({project})
router.put("/editProject", fetchUser, editProject);

//@Route: DELETE /api/profile/deleteProject
//@Desc: deleting project
//@Access: private
//@data: headers({authToken, projectId})
router.delete("/deleteProject", fetchUser, deleteProject);

//@Route: PUT /api/profile/editSkills
//@Desc: editing skills
//@Access: private
//@data: headers({authToken}), body({skills})
router.put("/editSkills", fetchUser, editSkills);

//@Route: POST /api/profile/addAchievement
//@Desc: adding new Achievement
//@Access: private
//@data: headers({authToken}), body({achievement})
router.post("/addAchievement", fetchUser, addAchievement);

//@Route: PUT /api/profile/editAchievement
//@Desc: editing achievement
//@Access: private
//@data: headers({authToken, achievementId}), body({achievement})
router.put("/editAchievement", fetchUser, editAchievement);

//@Route: DELETE /api/profile/deleteAchievement
//@Desc: deleting achievement
//@Access: private
//@data: headers({authToken, achievementId})
router.delete("/deleteAchievement", fetchUser, deleteAchievement);

module.exports = router;
