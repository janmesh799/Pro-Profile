const mongoose = require("mongoose");
const { Schema } = mongoose;

const educationSchema = new Schema({
  institute: {
    type: String,
    require: true,
  },
  tenure: {
    start: {
      type: Date,
    },
    end: {
      type: Date,
    },
  },
  course: {
    type: String,
    require: true,
  },
  grade: {
    type: String,
  },
  description: {
    type: String,
  },
});

const projectSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  links: {
    github: {
      type: String,
    },
    live: {
      type: String,
    },
  },
  technologies: {
    type: [String],
  },
});

const achievementSchema = new Schema({
  index: {
    type: Number,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  link: {
    text: {
      type: String,
    },
    url: {
      type: String,
    },
  },
});

const experienceSchema = new Schema({
  company: {
    type: String,
    require: true,
  },
  tenure: {
    start: {
      type: Date,
    },
    end: {
      type: Date,
    },
  },
  position: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
});

const ProfileSchema = new Schema({
  username: {
    type: String,
    require: true,
    unique: true,
    index: true,
  },
  email: {
    type: String,
    require: true,
  },
  bio: {
    type: {
      name: {
        type: String,
        default: "",
        require: true,
      },
      about: {
        type: String,
        default: "",
      },
      profilePic: {
        type: String,
        default: "",
      },
      contact: {
        phone: {
          type: String,
          default: "",
        },
        place: {
          type: String,
          default: "",
        },
      },
      gender: {
        type: String,
        default: "",
        require: true,
      },
      email: {
        type: String,
        default: "",
      },
    },
    default: {
      name: "",
      about: "",
      contact: {
        phone: "",
        place: "",
      },
      gender: "",
      email: "",
    },
  },

  education: {
    type: [educationSchema],
  },
  project: {
    type: [projectSchema],
  },
  achievement: {
    type: [achievementSchema],
  },
  experience: {
    type: [experienceSchema],
  },
  skills: {
    type: [String],
  },
  socials: {
    github: {
      username: {
        type: String,
        default: "Not available",
      },
      description: {
        type: String, //any description about the github profile
        default: "",
      },
      url: {
        type: String,
        default: "",
      },
    },
    leetcode: {
      username: {
        type: String,
        default: "Not available",
      },
      description: {
        type: String, //any description about the github profile
        default: "",
      },
      url: {
        type: String,
        default: "",
      },
    },
    linkedin: {
      username: {
        type: String,
        default: "Not available",
      },
      description: {
        type: String, //any description about the github profile
        default: "",
      },
      url: {
        type: String,
        default: "",
      },
    },
    codechef: {
      username: {
        type: String,
        default: "Not available",
      },
      description: {
        type: String, //any description about the codechef profile
        default: "",
      },
      url: {
        type: String,
        default: "",
      },
    },
    codeforces: {
      username: {
        type: String,
        default: "Not available",
      },
      description: {
        type: String, //any description about the codeforces profile
        default: "",
      },
      url: {
        type: String,
        default: "",
      },
    },
    hackerrank: {
      username: {
        type: String,
        default: "Not available",
      },
      description: {
        type: String, //any description about the hackerrank profile
        default: "",
      },
      url: {
        type: String,
        default: "",
      },
    },
    hackerearth: {
      username: {
        type: String,
        default: "Not available",
      },
      description: {
        type: String, //any description about the hackerearth profile
        default: "",
      },
      url: {
        type: String,
        default: "",
      },
    },
    geeksforgeeks: {
      username: {
        type: String,
        default: "Not available",
      },
      description: {
        type: String, //any description about the geeksforgeeks profile
        default: "",
      },
      url: {
        type: String,
        default: "",
      },
    },
  },
});

const profile = mongoose.model("profile", ProfileSchema);
module.exports = profile;
