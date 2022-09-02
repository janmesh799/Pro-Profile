const jwt = require("jsonwebtoken");
const secKey = "random123";
const getuser = (req, res, next) => {
  const token = req.header("authToken");
  if (token) {
    try {
      const user = jwt.verify(token, secKey);
      req.user = user;
      next();
    } catch (error) {
      res.json({ message: "please authenticate using a valid credentials" });
    }
  } else {
    res.json({ message: "please authenticate using a valid credentials" });
  }
};

module.exports = getuser;
