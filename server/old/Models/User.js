const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema({
  username: {
    type: String,
    require: true,
    unique: true,
    index: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  }
});
const User = mongoose.model("User", userSchema);
module.exports = User;
