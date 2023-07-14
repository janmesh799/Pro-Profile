import { Typography } from "@mui/material";
import React from "react";

const style = {
  skill: {
    backgroundColor: "#5271FF",
    color: "white",
    padding: "0.25rem",
    fontSize: "1.5rem",
    borderRadius:"0.5rem",
    margin:"0.5rem 0.5rem"
  },
};

const SkillComponent = (props) => {
  const skill = props.skill;
  return <Typography sx={style.skill}>{skill}</Typography>;
};

export default SkillComponent;
