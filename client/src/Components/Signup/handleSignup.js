import axios from "axios";
const handleSignup = async (creds) => {
  const url = "http://localhost:5000/api/auth/user";
  const data = creds;
  try {

    const res = await axios.post(url, data);
    return res.data;
  } catch (error) {
    return { "success": false, response: error.response }
  }
};
export default handleSignup;
