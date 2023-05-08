const express = require('express');
const router = express.Router();
const User = require('./../Models/User');
const fetchUser = require("../middleware/fetchUser")
const createProfile = require('./profile/createProfile.js');
const updateProfile = require('./profile/updateProfile.js');
const getProfile = require('./profile/getProfile.js');


// @Route: POST /api/auth/createProfile
// @Desc: Create a new profile
// @Access: Private
// @data: body({bio,profilePic,educations,projects,achievements,experience,skills,socials}), headers({authToken})
router.post("/createProfile", fetchUser, createProfile);


//@Route: POST /api/auth/updateProfile
//@Desc: Update a profile
//@Access: Private
//@data: body({bio,profilePic,educations,projects,achievements,experience,skills,socials}), headers({authToken})
router.post("/updateProfile", fetchUser, updateProfile);

//@Route: GET /api/auth/getProfile
//@Desc: Get a profile
//@Access: public
//@data: headers({username})
router.get("/getProfile", getProfile);

module.exports = router;