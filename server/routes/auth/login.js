const User = require("../../Models/User");
const bcrypt = require("bcryptjs");


const login = async (req, res) => {
  //extracting username and password from body
  const { username, password } = req.body;

  //finding the user with given username
  const user = await User.findOne({ username });

  //if user is not exists,then sending success = false, and and message
  if (!user) {
    res.json({ success: false, message: "username doesn't exists" });
  }

  //if user is exits then , logging in
  else {
    //retriving hashed_pass stored in Db
    const hashed_pass = user.password;

    //comparing hashed_password and given password using bcrypt.compare() method
    const isValid = await bcrypt.compare(password, hashed_pass);

    //if password is correct then sending response as success = true, and sending authentiacation token.
    if (isValid) {
      res.json({ success: true, token: user.token });
    }

    //is password is not correct , then sending response as success = false, and sending an error message
    else {
      res.json({ success: false, message: "please enter correct credentials" });
    }
  }
};

module.exports = login;
