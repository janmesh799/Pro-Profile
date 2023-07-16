import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EditProjectModal from "./EditProjectModal";
import { useDispatch, useSelector } from "react-redux";
import { deleteProject } from "../../../store/profile/profileSlice";
import { Link } from "react-router-dom";

const formatDate = (isoDateString) => {
  const date = new Date(isoDateString);
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  return `${month}, ${year}`;
};

const arrayToString = (arr) => {
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    res += arr[i] + ", ";
  }
  return res.substring(0, res.length - 2);
};

export default function ProjectCardComponent(props) {
  const proj = props.project;
  const dispatch = useDispatch();
  const { authToken } = useSelector((state) => state.auth);
  const deleteProjectHandler = (id) => {
    dispatch(deleteProject({ projectId: proj._id, authToken: authToken }));
    setTimeout(function () {
      window.location.reload();
    }, 3000);
  };
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
      <CardActions sx={{ display: "flex", flexDirection: "column" }}>
        <Button
          sx={{ margin: "1rem 0rem 1rem 0rem" }}
          variant="outlined"
          onClick={() => deleteProjectHandler(proj._id)}
          color="error"
          size="small"
        >
          DELETE Project
        </Button>
        <EditProjectModal project={proj} />
      </CardActions>
    </>
  );
  return (
    <Box sx={{ minWidth: "30%", maxWidth: "45%" }}>
      <Card
        sx={{
          margin: "1rem 0rem 1rem 0rem",
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
