import React from "react";
import { useSelector } from "react-redux";
import { Container } from "@mui/system";
import { Typography, Card } from "@mui/material";
import { Link } from "react-router-dom";
const Project = () => {
  const state = useSelector((state) => state);
  const projects = state.user.projects;
  return (
    <Container
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      {projects.map((proj) => {
        return (
          <Card
            key={proj.from_year}
            sx={{
              margin: "2em",
              padding: "2em",
              boxShadow: " 10px 10px 5px #C4C6E2;",
            }}
            variant="outlined"
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Typography>Title : </Typography>
              <Typography sx={{ margin: "0em 1em" }}> {proj.name}</Typography>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Typography>Description : </Typography>
              <Typography sx={{ margin: "0em 1em" }}>
                {" "}
                {proj.description}{" "}
              </Typography>
            </div>
            <div style={{display:"flex",flexDirection:"row"}}>
              <Typography>Links:</Typography>
              <Typography sx={{display:"flex",flexDirection:"row",}}>
                {proj.links.map((link) => {
                  return (
                    <Link style={{margin:"0em 0.5em"}} to={`${link.link}`} target="_blank">
                      {" "}
                      {link.displayText}
                    </Link>
                  );
                })}
              </Typography>
            </div>
          </Card>
        );
      })}
    </Container>
  );
};

export default Project;
