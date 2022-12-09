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
    }
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
  }
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
    }
  },
  technologies: {
    type: [String],
  }
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
    }
  }
})

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
    }
  },
  position: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  }
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
    name: {
      type: String,
      require: true,
    },
    about: {
      type: String,
    },
    profilePic: {
      type: String,
    },
    contact: {
      phone: {
        type: String,
      },
      place: {
        type: String,
      }
    },
    gender: {
      type: String,
      require: true,
    },
    email: {
      type: String
    }
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
      },
      description: {
        type: String, //any description about the github profile
      },
      url: {
        type: String,
      }
    },
    linkedin: {
      username: {
        type: String,
      },
      description: {
        type: String, //any description about the github profile
      },
      url: {
        type: String,
      }
    },
    codechef: {
      username: {
        type: String,
      },
      description: {
        type: String, //any description about the codechef profile
      },
      url: {
        type: String,
      }
    },
    codeforces: {
      username: {
        type: String,
      },
      description: {
        type: String, //any description about the codeforces profile
      },
      url: {
        type: String,
      }
    },
    hackerrank: {
      username: {
        type: String,
      },
      description: {
        type: String, //any description about the hackerrank profile
      },
      url: {
        type: String,
      }
    },
    hackerearth: {
      username: {
        type: String,
      },
      description: {
        type: String, //any description about the hackerearth profile
      },
      url: {
        type: String,
      }
    },
    geeksforgeeks: {
      username: {
        type: String,
      },
      description: {
        type: String, //any description about the geeksforgeeks profile
      },
      url: {
        type: String,
      }
    }
  }
});

const profile = mongoose.model("profile", ProfileSchema);
module.exports = profile;
