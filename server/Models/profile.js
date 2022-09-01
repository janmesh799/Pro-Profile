const mongoose = require("mongoose");
const { Schema } = mongoose;

const educationSchema = new Schema({
  college: {
    type: String,
    require: true,
  },
  degree: {
    type: String,
  },
  from_year: {
    type: Number,
  },
  to_year: {
    type: Number,
  },
  grade: {
    type: String,
  },
  desc: {
    type: String,
  },
});
const LinkSchema = new Schema({
  displayText: {
    type: String,
  },
  link: {
    type: String,
    require: true,
  },
});
const projectSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  links: [LinkSchema],
});
const ExperienceSchema = new Schema({
  organisation: {
    type: String,
    require: true,
  },
  from_year: {
    type: Number,
  },
  to_year: {
    type: Number,
  },
  role: {
    type: String,
  },
});
const SocialSchema = new Schema({
  username: {
    type: String,
  },
  website: [LinkSchema],
});
const AchievementSchema = new Schema({
  index: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
  },
});
const PortfolioSchema = new Schema({
  username: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  education: [educationSchema],
  projects: [projectSchema],
  Experience: [ExperienceSchema],
  Social: [SocialSchema],
  Achievements: [AchievementSchema],
});

const Portfolio = mongoose.model("portfolio", PortfolioSchema);
module.exports = Portfolio;