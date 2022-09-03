const express = require("express");
const router = express.Router();
const getprofile = require("./profile/getprofile");
const addProfile = require("./profile/addProfile");
const getuser = require("../Middleware/getuser");
const editProfile = require("./profile/editProfile");

// ENDPOINT #1: creates a profile with sufficient creds and retrives username using middleware 'getuser'.
//              if user is not logged in, then it will not allow user to create profile
router.post("/", getuser, addProfile);

//ENDPOINT #2:finds and return user with the given username only if user is logged in, otherwise gives authetication errror
router.get("/", getuser, getprofile);

//ENDPOINT #3:
router.put("/", getuser, editProfile);
module.exports = router;
