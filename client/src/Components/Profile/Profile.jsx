import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
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
import { profileAction } from "../../redux/actions/profileActions";
import NotFound404 from "../NotFound404/NotFound404";

const Profile = () => {
  const state = useSelector((state) => state);
  const location = useLocation();
  const dispatch = useDispatch();
  const [page, setpage] = useState("education");
  const buttons = [
    [1, <SchoolIcon />, "Education", "education"],
    [2, <AccountTreeIcon />, "Projects", "projects"],
    [3, <EngineeringIcon />, "Experience", "experience"],
    [4, <EmojiEventsIcon />, "Achievements", "achievements"],
  ];
  function fetchProfile() {
    const username = location.search.substring(1);
    console.log("usrname = ", username);
    dispatch(profileAction(username));
  }
  useEffect(() => {
    fetchProfile();
    // eslint-disable-next-line
  }, [location]);

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
        if (state.profile.errorMessage === "404 Not found") {
          return <NotFound404 />;
        } else {
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
        }
      })()}
    </div>
  );
};

export default Profile;
