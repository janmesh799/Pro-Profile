const User = require("../../Models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secKey = process.env.SECKEY;

const loginUser = async (req, res) => {
  let errorCode = null;
  try {
    // extracting credentials from body of request
    let { email, password } = req.body;
    email = email.toLowerCase();

    // finding if user exists
    let user = await User.findOne({ email });
    if (!user) {
      errorCode = 403;
      throw new Error("Please try to login with correct credentials");
    }

    // comparing passwords
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      errorCode = 403;
      throw new Error("Please try to login with correct credentials");
    }

    // if passwords get authenticated, creating auth token
    const data = {
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        name: user.name,
      },
    };
    const authToken = jwt.sign(data, secKey);

    // sending response
    res.json({
      authToken,
      success: true,
      user: data.user,
      message: "Login Successful",
    });
  } catch (err) {
    // sending response with errorCode 500 and error message if any error raised
    return res
      .status(errorCode || 500)
      .json({
        success: false,
        message: "Internal server Error",
        error: err.message,
      });
  }
};

module.exports = loginUser;
