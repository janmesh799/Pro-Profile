import axios from "axios";
const handleLogin = async (creds) => {
  const url = "http://localhost:5000/api/auth/login";
  const data = creds;
  const res = await axios.post(url, data);
//   console.log(res.data);
  return res.data;
};
// default export = handleLogin;
export default handleLogin;
// module.exports = handleLogin;
