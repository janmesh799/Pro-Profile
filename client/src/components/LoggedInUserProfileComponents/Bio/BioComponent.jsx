import React from "react";
import { Typography } from "@mui/material";
import EditBio from "./EditBio";

const BioComponent = (props) => {
  const bio = props.bio;
  return (
    <div>
      <Typography>
        <b>Name:</b> {bio.name}
      </Typography>
      <Typography>
        <b>About:</b> {bio.about}
      </Typography>
      <Typography>
        <b>Phone:</b> {bio.contact.phone}
      </Typography>
      <Typography>
        <b>Email:</b> {bio.email}
      </Typography>
      <Typography>
        <b>Place:</b> {bio.contact.place}
      </Typography>
      <Typography>
        <b>Gender:</b> {bio.gender}
      </Typography>
      <EditBio bio={bio} />
    </div>
  );
};

export default BioComponent;
