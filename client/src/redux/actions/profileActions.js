import { fetchProfile } from "../services/profileService";
import {
  PROFILE_FETCHED_FAILED,
  PROFILE_FETCHED_SUCCESSFULL,
} from "../actionTypes";

export function profileAction(username) {
  return (dispatch) => {
    fetchProfile(username)
      .then((response) => {
        dispatch(profileFetchedSuccessfull(response.data));
      })
      .catch((error) => {
        dispatch(profileFetchedFailed(error));
      });
  };
}

export function profileFetchedSuccessfull(payload) {
  return {
    type: PROFILE_FETCHED_SUCCESSFULL,
    payload,
  };
}

export function profileFetchedFailed(message) {
  return {
    type: PROFILE_FETCHED_FAILED,
    payload: message,
  };
}
