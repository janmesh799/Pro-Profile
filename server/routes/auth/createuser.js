const User = require("../../Models/User.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const secKey = "random123";
const createUser = async (req, res) => {
  try {
    const creds = req.body;
    const { name, username, email, password } = creds; //extracting creds from body
    const UserWithSameUsername = await User.find({ username: email }); //finding any user with same username
    const UserWithSameEmail = await User.find({ email: email }); //finding any user with same email

    //setting isNew to false if any user if found with same email or username, else it is set to true
    let isNew = true;
    if (UserWithSameEmail.length !== 0) isNew = false;
    if (UserWithSameUsername.length !== 0) isNew = false;

    //if given user is unique then creating new user
    if (isNew) {

      
      //hashing password with user of bcryptjs with salt of 10 characters
      const securedPass = await bcrypt.hash(password, 10);

      //creating payload jwt to make authentiacation token
      const payload = {
        name: name,
        username: username,
        email: email,
      };

      //creating token using jwt.sign() method
      const token = jwt.sign(payload, secKey);

      //creating user using mongoose
      User.create({
        name: name,
        username: username,
        email: email,
        password: securedPass,
        token: token,
      });

      //seding response as success = true, and authenticatin token
      res.json({ success: true, token });
    }

    //if username or email already exists then sending success = false, and an error message
    else {
      res.json({
        success: false,
        message: "username or email already exists",
      });
    }
  } catch (error) {
    //if any internal server error occurs, then sending 500 status code and an error message with error description
    res
      .json({
        success: false,
        message: "Internal Server Error",
        error: error.message,
      })
      .status(500);
  }
};

module.exports = createUser;
