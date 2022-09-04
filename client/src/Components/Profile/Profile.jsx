import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
const Profile = () => {
  const location = useLocation();
  const [user, setuser] = useState({});
  const getuser = async () => {
    const param = location.search.substring(1);
    // const res = await axios.get("https://jsonplaceholder.typicode.com/posts", {
    const res = await axios.get("http://localhost:5000/api/profile", {
      headers: {
        username: param,
      },
    });
    setuser(res.data);
  };
  useEffect(() => {
    getuser();
    // eslint-disable-next-line
  }, [location.search]);

  return <div>{user.success ? JSON.stringify(user) : "user not found"}</div>;
};

export default Profile;
