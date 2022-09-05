const express = require("express");
const router = express.Router();
const createUser = require("./auth/createuser");
const login = require("./auth/login");
const getUserByAuthToken = require("./auth/getUserByAuthToken");

// ENDPOINT #1: creates an user with sufficient creds.
router.post("/user", createUser);

//ENDPOINT #2: loggig in user usign username and password
router.post("/login", login);

//ENDPOINT #3: getting user with the help of authToken
router.get("/user", getUserByAuthToken);
module.exports = router;
