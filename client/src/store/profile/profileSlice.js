import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import profileService from "./ProfileService";
const initialState = {
  isFound: false,
  name: null,
  username: null,
  bio: null,
  gender: null,
  socials: null,
  email: null,
  skills: null,
  education: null,
  project: null,
  achievement: null,
  experience: null,
};

// get profile by username
export const getProfile = createAsyncThunk(
  "profile/getProfile",
  async (username, thunkAPI) => {
    try {
      const response = await profileService.getProfile(username.toLowerCase());
      console.log(response);
      if (response.success) return response;
      else {
        throw new Error(response.message);
      }
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);


export const addEducation = createAsyncThunk(
  "profile/addEducation",
  async ({ education, authToken }, thunkAPI) => {
    try {
      const response = await profileService.addEducation({
        education,
        authToken,
      });
      console.log(response);
      if (response.success) return response;
      else {
        throw new Error(response.message);
      }
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const deleteEducation = createAsyncThunk(
  "profile/deleteEducation",
  async ({ educationId, authToken }, thunkAPI) => {
    try {
      const response = await profileService.deleteEducation({
        educationId,
        authToken,
      });
      console.log(response);
      if (response.success) return response;
      else {
        throw new Error(response.message);
      }
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const editEducation = createAsyncThunk(
  "profile/editEducation",
  async ({ educationId, education, authToken }, thunkAPI) => {
    try {
      const response = await profileService.editEducation({
        educationId,
        education,
        authToken,
      });
      if (response.success) return response;
      else {
        throw new Error(response.message);
      }
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const addExperience = createAsyncThunk(
  "profile/addExperience",
  async ({ experience, authToken }, thunkAPI) => {
    try {
      const response = await profileService.addExperience({
        experience,
        authToken,
      });
      console.log(response);
      if (response.success) return response;
      else {
        throw new Error(response.message);
      }
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const deleteExperience = createAsyncThunk(
  "profile/deleteExperience",
  async ({ experienceId, authToken }, thunkAPI) => {
    try {
      const response = await profileService.deleteExperience({
        experienceId,
        authToken,
      });
      console.log(response);
      if (response.success) return response;
      else {
        throw new Error(response.message);
      }
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const editExperience = createAsyncThunk(
  "profile/editExperience",
  async ({ experienceId, experience, authToken }, thunkAPI) => {
    try {
      const response = await profileService.editExperience({
        experienceId,
        experience,
        authToken,
      });
      if (response.success) return response;
      else {
        throw new Error(response.message);
      }
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const addProject = createAsyncThunk(
  "profile/addProject",
  async ({ project, authToken }, thunkAPI) => {
    try {
      console.log(project);
      const response = await profileService.addProject({
        project,
        authToken,
      });
      console.log(response);
      if (response.success) return response;
      else {
        throw new Error(response.message);
      }
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const deleteProject = createAsyncThunk(
  "profile/deleteProject",
  async ({ projectId, authToken }, thunkAPI) => {
    try {
      const response = await profileService.deleteProject({
        projectId,
        authToken,
      });
      console.log(response);
      if (response.success) return response;
      else {
        throw new Error(response.message);
      }
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const editProject = createAsyncThunk(
  "profile/editProject",
  async ({ projectId, project, authToken }, thunkAPI) => {
    try {
      const response = await profileService.editProject({
        projectId,
        project,
        authToken,
      });
      if (response.success) return response;
      else {
        throw new Error(response.message);
      }
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const editSkills = createAsyncThunk(
  "profile/editSkills",
  async ({ skills, authToken }, thunkAPI) => {
    try {
      const response = await profileService.editSkills({
        skills,
        authToken,
      });
      if (response.success) return response;
      else {
        throw new Error(response.message);
      }
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const addAchievement = createAsyncThunk(
  "profile/addAchievement",
  async ({ achievement, authToken }, thunkAPI) => {
    try {
      const response = await profileService.addAchievement({
        achievement,
        authToken,
      });
      if (response.success) return response;
      else {
        throw new Error(response.message);
      }
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const deleteAchievement = createAsyncThunk(
  "profile/deleteAchievement",
  async ({ achievementId, authToken }, thunkAPI) => {
    try {
      const response = await profileService.deleteAchievement({
        achievementId,
        authToken,
      });
      if (response.success) return response;
      else {
        throw new Error(response.message);
      }
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const editAchievement = createAsyncThunk(
  "profile/editAchievement",
  async ({ achievementId, achievement, authToken }, thunkAPI) => {
    try {
      const response = await profileService.editAchievement({
        achievementId,
        achievement,
        authToken,
      });
      if (response.success) return response;
      else {
        throw new Error(response.message);
      }
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const editSocials = createAsyncThunk(
  "profile/editSocials",
  async ({ socials, authToken }, thunkAPI) => {
    try {
      const response = await profileService.editSocials({
        socials,
        authToken,
      });
      if (response.success) return response;
      else {
        throw new Error(response.message);
      }
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const editBio = createAsyncThunk(
  "profile/editBio",
  async ({ bio, authToken }, thunkAPI) => {
    try {
      const response = await profileService.editBio({
        bio,
        authToken,
      });
      if (response.success) return response;
      else {
        throw new Error(response.message);
      }
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfileState: (state, action) => {
      state.bio = action.payload.bio;
      state.gender = action.payload.gender;
      state.socials = action.payload.socials;
      state.email = action.payload.email;
      state.skills = action.payload.skills;
      state.education = action.payload.education;
      state.project = action.payload.project;
      state.achievement = action.payload.achievement;
      state.experience = action.payload.experience;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {})
      .addCase(getProfile.fulfilled, (state, action) => {
        if (action.payload.profile.socials) {
          state.socials = action.payload.profile.socials;
        } else {
          state.socials = null;
        }
        if (action.payload.profile.name) {
          state.name = action.payload.profile.name;
        } else {
          state.name = null;
        }
        if (action.payload.profile.skills) {
          state.skills = action.payload.profile.skills;
        } else {
          state.skills = null;
        }
        if (action.payload.profile.name) {
          state.username = action.payload.profile.name;
        } else {
          state.username = null;
        }
        if (action.payload.profile.project) {
          state.project = action.payload.profile.project;
        } else {
          state.project = null;
        }
        if (action.payload.profile.bio) {
          state.bio = action.payload.profile.bio;
        } else {
          state.bio = null;
        }
        if (action.payload.profile.experience) {
          state.experience = action.payload.profile.experience;
        } else {
          state.experience = null;
        }
        if (action.payload.profile.gender) {
          state.gender = action.payload.profile.gender;
        } else {
          state.gender = null;
        }
        if (action.payload.profile.email) {
          state.email = action.payload.profile.email;
        } else {
          state.email = null;
        }
        if (action.payload.profile.education) {
          state.education = action.payload.profile.education;
        } else {
          state.education = null;
        }
        if (action.payload.profile.achievement) {
          state.achievement = action.payload.profile.achievement;
        } else {
          state.achievement = null;
        }
        if (action.payload.profile.username) {
          state.username = action.payload.profile.username;
        } else {
          state.username = null;
        }
        state.isFound = true;
        state.name = state.bio.name;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.name = null;
        state.username = null;
        state.bio = null;
        state.gender = null;
        state.socials = null;
        state.email = null;
        state.skills = null;
        state.education = null;
        state.project = null;
        state.achievement = null;
        state.experience = null;
        state.isFound = false;
      });
  },
});

export const { setProfileState } = profileSlice.actions;
export default profileSlice.reducer;
