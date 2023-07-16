import axios from "axios";
import { Host } from "../../constantVariables";
import { toast } from "react-toastify";

const API_URL = `${Host}/api/profile`;

//get profile by username
const getProfile = async (username) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        username: username,
      },
    };
    console.log(config);
    const response = await axios.get(API_URL + "/getprofile", config);
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const addEducation = async ({ education, authToken }) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        authToken: authToken,
      },
    };
    console.log(config);
    console.log(education);
    const response = await axios.post(
      API_URL + "/addEducation",
      education,
      config
    );
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const deleteEducation = async ({ educationId, authToken }) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        authToken: authToken,
        educationId: educationId,
      },
    };
    console.log(config);
    const response = await axios.delete(API_URL + "/deleteEducation", config);
    if (response.data.success === true) {
      toast.done("deleted education");
    }
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const editEducation = async ({ educationId, education, authToken }) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        authToken: authToken,
        educationId: educationId,
      },
    };
    const response = await axios.put(
      API_URL + "/editEducation",
      education,
      config
    );
    if (response.data.success === true) {
      toast.done("edited education");
    }
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const addExperience = async ({ experience, authToken }) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        authToken: authToken,
      },
    };
    console.log(config);
    console.log(experience);
    const response = await axios.post(
      API_URL + "/addExperience",
      { experience },
      config
    );
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const deleteExperience = async ({ experienceId, authToken }) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        authToken: authToken,
        experienceId: experienceId,
      },
    };
    console.log(config);
    const response = await axios.delete(API_URL + "/deleteExperience", config);
    if (response.data.success === true) {
      toast.done("deleted experience");
    }
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const editExperience = async ({ experienceId, experience, authToken }) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        authToken: authToken,
        experienceId: experienceId,
      },
    };
    const response = await axios.put(
      API_URL + "/editExperience",
      experience,
      config
    );
    if (response.data.success === true) {
      toast.done("edited experience");
    }
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const addProject = async ({ project, authToken }) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        authToken: authToken,
      },
    };
    console.log(config);
    console.log(project);
    const response = await axios.post(API_URL + "/addProject", project, config);
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const deleteProject = async ({ projectId, authToken }) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        authToken: authToken,
        projectId: projectId,
      },
    };
    const response = await axios.delete(API_URL + "/deleteProject", config);
    if (response.data.success === true) {
      toast.done("deleted project");
    }
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const editProject = async ({ projectId, project, authToken }) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        authToken: authToken,
        projectId: projectId,
      },
    };
    const response = await axios.put(API_URL + "/editProject", project, config);
    if (response.data.success === true) {
      toast.done("edited project");
    }
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const editSkills = async ({ skills, authToken }) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        authToken: authToken,
      },
    };
    const response = await axios.put(API_URL + "/editskills", skills, config);
    if (response.data.success === true) {
      toast.done("edited skills");
    }
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const addAchievement = async ({ achievement, authToken }) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        authToken: authToken,
      },
    };
    const response = await axios.post(
      API_URL + "/addAchievement",
      achievement,
      config
    );
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const deleteAchievement = async ({ achievementId, authToken }) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        authToken: authToken,
        achievementId: achievementId,
      },
    };
    const response = await axios.delete(API_URL + "/deleteAchievement", config);
    if (response.data.success === true) {
      toast.done("deleted achievement");
    }
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const editAchievement = async ({ achievementId, achievement, authToken }) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        authToken: authToken,
        achievementId: achievementId,
      },
    };
    const response = await axios.put(
      API_URL + "/editAchievement",
      achievement,
      config
    );
    if (response.data.success === true) {
      toast.done("edited achievement");
    }
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const editSocials = async ({ socials, authToken }) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        authToken: authToken,
      },
    };
    const response = await axios.put(API_URL + "/editSocials", socials, config);
    if (response.data.success === true) {
      toast.done("edited socials");
    }
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const profileService = {
  getProfile,
  addEducation,
  addExperience,
  addProject,
  addAchievement,
  deleteEducation,
  deleteProject,
  deleteExperience,
  deleteAchievement,
  editEducation,
  editExperience,
  editProject,
  editSkills,
  editAchievement,
  editSocials,
};

export default profileService;
