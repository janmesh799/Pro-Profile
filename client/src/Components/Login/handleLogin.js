import axios from "axios";
const handleLogin = async (creds) => {
  const url = "http://localhost:5000/api/auth/login";
  const data = creds;
  const res = await axios.post(url, data);
  return res.data;
};
export default handleLogin;
