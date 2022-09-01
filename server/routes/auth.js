const express = require("express");
const router = express.Router();
const createUser = require('./auth/createuser');
const login = require("./auth/login");

// ENDPOINT #1: creates an user with sufficient creds.
router.post("/user", createUser);

//ENDPOINT #2: loggig in user usign username and password
router.get('/login',login)
module.exports = router;
