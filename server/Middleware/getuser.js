const jwt = require("jsonwebtoken");
const secKey = "random123";
const getuser = (req, res, next) => {
  //extracting 'authToken' from heder
  const token = req.header("authToken");

  //if authToken is present, then proceeding further
  if (token) {
    try {
      //verifying authToken using jwt.verify method
      const user = jwt.verify(token, secKey);

      //feeding user with the user credentials
      req.user = user;

      //procedding to next middleware function
      next();
    } catch (error) {
      //if authToken is not valid or some error occurs then, sending authentcation error message and 401 status code
      res
        .status(401)
        .json({ message: "please authenticate using a valid credentials" });
    }
  }

  //if authToken is not present in the header, then sending authentication error message and 401 status code
  else {
    res
      .status(401)
      .json({ message: "please authenticate using a valid credentials" });
  }
};

module.exports = getuser;
