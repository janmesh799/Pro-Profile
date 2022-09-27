import { PROFILE_FETCHED_SUCCESSFULL } from "../actionTypes";
import { PROFILE_FETCHED_FAILED } from "../actionTypes";

const initialState = {
  user: {
    success: true,
    user: {
      _id: "",
      username: "",
      name: "username",
      education: [],
      projects: [],
      experience: [],
      social: [{}],
      achievements: [],
    },
  },
};

export function profileReducer(state = initialState, action) {
  switch (action.type) {
    case PROFILE_FETCHED_SUCCESSFULL:
      return {
        ...state,
        user: action.payload,
        errorMessage: "",
      };
    case PROFILE_FETCHED_FAILED:
      return {
        ...state,

        errorMessage: "404 Not found",
      };

    default:
      return state;
  }
}
