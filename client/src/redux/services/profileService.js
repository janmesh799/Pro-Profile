import axios from "axios";

export function fetchProfile(username) {
  const config = {
    headers: {
      username: username,
    },
  };
  const url = "http://localhost:5000/api/profile";
  return axios.get(url, config);
}
