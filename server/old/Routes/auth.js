const express = require('express');
const router = express.Router();
const User = require('./../Models/User');
const { body } = require('express-validator');
const createUser = require('./auth/createUser.js');
const loginUser = require('./auth/loginUser.js');
const getUser = require('./auth/getUser.js');
const updatePassword = require('./auth/updatePassword.js');
const fetchUser = require("../middleware/fetchUser")

//@Route: POST /api/auth/createUser
//@Desc: Create a new user
//@Access: Public
//@data: {name, email, password, username}
const format_check = [body('email').isEmail(), body('password').isLength({ min: 6 })]; //validates the input
router.post("/createUser", format_check, createUser);

//@Route: POST /api/auth/login
//@Desc: Login a user
//@Access: Public
//@data: {email, password}
router.post("/login", loginUser);

//@Route: GET /api/auth/getUser
//@Desc: Get logged in user details using: POST /api/auth/login
//@Access: Private
router.get("/getUser", fetchUser, getUser);

//@Route: POST /api/auth/updatePassword
//@Desc: Update password of logged in user
//@Access: Private
//@data: {oldPassword, newPassword}
router.post("/updatePassword", fetchUser, updatePassword);

//exporting the router
module.exports = router;