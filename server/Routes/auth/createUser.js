const jwt = require("jsonwebtoken");
const secKey = process.env.SECKEY;
const bcrypt = require("bcryptjs");
const User = require("../../Models/User");
const Profile = require("../../Models/profile");

const createUser = async (req, res) => {
  let errorCode = null;
  try {
    // extracting user from body
    let { name, email, password, username } = req.body;
    email = email.toLowerCase();
    username = username.toLowerCase();
    // finding user
    const user = await User.findOne({
      $or: [{ email }, { username }],
    });

    //throwing error if some other user already exists with same email or username
    if (user) {
      errorCode = 400;
      throw new Error("Sorry! this username or email already exists");
    }
    //generating salt and hashing password
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(password, salt);

    // creating and saving new User
    const newUser = new User({ name, email, password: secPass, username });
    await newUser
      .save()
      .then((newUser) => {
        const profile = new Profile({
          bio: {
            name: newUser.name,
            email: newUser.email,
          },
          name: newUser.name,
          email: newUser.email,
          username: newUser.username,
        });
        profile.save();
        // creating authentication token
        const data = {
          user: {
            id: newUser.id,
            username: newUser.username,
            email: newUser.email,
            name: newUser.name,
          },
        };
        const authToken = jwt.sign(data, secKey);

        // sending response
        res.status(200).json({
          success: true,
          message: "User Created successfully",
          authToken,
          newUser,
        });
      })
      .catch((err) => {
        throw new Error(err.message);
      });
  } catch (err) {
    // sending response with errorCode 500 and error message if any error raised
    return res.status(errorCode || 500).json({
      success: false,
      message: "Internal server Error",
      error: err.message,
    });
  }
};
module.exports = createUser;
