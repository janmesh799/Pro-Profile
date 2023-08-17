import React from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { Host } from "../constantVariables";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const style = {
  container: {
    display: "flex",
    justifyContent: "center",
  },
  buttonText: {
    font: "1.5rem",
  },
};
const RandomProfile = () => {
  const navigate = useNavigate();

  const getRandom = async () => {
    const response = await axios.get(`${Host}/api/profile/getRandomProfile`);
    if (response.data.success === false) {
      toast.error("Error in fetching a random profile");
      return;
    }
    const username = response.data.username;
    navigate(`/?username=${username}`);
  };

  return (
    <div style={style.container}>
      <Button sx={style.buttonText} variant="contained" onClick={getRandom}>
        {" "}
        see a random Profile
      </Button>
    </div>
  );
};

export default RandomProfile;
