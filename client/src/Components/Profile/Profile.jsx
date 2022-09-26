import React, { useState } from "react";
import { Container } from "@mui/system";
import { Button, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import EngineeringIcon from "@mui/icons-material/Engineering";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import Education from "./Education";
import Project from "./Project";
import Experience from "./Experience";
import Achievement from "./Achievement";
const Profile = () => {
  const [page, setpage] = useState("education");
  const buttons = [
    [1, <SchoolIcon />, "Education", "education"],
    [2, <AccountTreeIcon />, "Projects", "projects"],
    [3, <EngineeringIcon />, "Experience", "experience"],
    [4, <EmojiEventsIcon />, "Achievements", "achievements"],
  ];

  return (
    <div>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          background: "#C4C6E2",
        }}
      >
        {buttons.map((button) => {
          const col = page === button[3] ? "" : "#990404";
          const sc = page === button[3] ? 1.25 : 1;
          return (
            <Button
              // disabled={page ===button[3]}
              key={button[0]}
              onClick={() => {
                setpage(button[3]);
              }}
              sx={{
                color: col,
                display: "flex",
                flexDirection: "column",
                transform: `scale(${sc})`,
              }}
            >
              {button[1]}
              <Typography>{button[2]}</Typography>
            </Button>
          );
        })}
      </Container>
      {(() => {
        switch (page) {
          case "education":
            return <Education />;

          case "projects":
            return <Project />;
          case "experience":
            return <Experience />;
          case "achievements":
            return <Achievement />;
          default:
            return <Education />;
        }
      })()}
    </div>
  );
};

export default Profile;
