import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const arrayToString = (arr) => {
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    res += arr[i] + ", ";
  }
  return res.substring(0, res.length - 2);
};

export default function ProjectCard(props) {
  const proj = props.project;

  const card = (
    <>
      <CardContent>
        <Typography variant="h5" component="div">
          {proj.title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Tech Stack:{" "}
          {proj.technologies.length > 0
            ? arrayToString(proj.technologies)
            : "No Tech Mentioned"}
        </Typography>
        <Typography variant="body2">{proj.description}</Typography>
        <Typography
          sx={{
            margin: "1rem 0rem 0rem 0rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
          variant="body2"
        >
          <Link to={proj.links.github}>
            <i
              style={{ color: "black", fontSize: "200%", margin: "0rem 1rem" }}
              className="fa-brands fa-github"
            ></i>
          </Link>
          <Link to={proj.links.live}>
            <i
              style={{ color: "black", fontSize: "200%", margin: "0rem 1rem" }}
              className="fa-solid fa-globe"
            ></i>
          </Link>
        </Typography>
      </CardContent>
    </>
  );
  return (
    <Box sx={{ minWidth: "20%", maxWidth: "40%" }}>
      <Card
        sx={{
          margin: "1rem 0.5rem 1rem 0.5rem",
          boxShadow: "10px 5px 5px rgba(0, 0, 255,0.5)",
        }}
        variant="outlined"
      >
        {card}
      </Card>
      {
        // JSON.stringify(props)
      }
    </Box>
  );
}
