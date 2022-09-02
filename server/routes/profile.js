const express = require("express");
const router = express.Router();
const getprofile = require("./profile/getprofile");
const addProfile = require("./profile/addProfile");
const getuser = require("../Middleware/getuser");
// ENDPOINT #1: creates an user with sufficient creds.
router.get("/", getuser, getprofile);
router.post("/", getuser, addProfile);
module.exports = router;
