// const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/profile_creator";

const connectToMongo = () => {
  try {
    mongoose.connect(url);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectToMongo;
