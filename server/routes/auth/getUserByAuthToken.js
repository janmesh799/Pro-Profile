const jwt = require("jsonwebtoken");
const secKey = "random123";
const getUserByAuthToken = (req, res) => {
  try {
    const token = req.header("authToken");
    const user = jwt.verify(token, secKey);
    res.json(user);
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "please authenticate using a valid credsF",
      error,
    });
  }
};

module.exports = getUserByAuthToken;
