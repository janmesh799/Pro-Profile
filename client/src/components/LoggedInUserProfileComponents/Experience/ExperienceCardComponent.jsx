import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EditExperienceModal from "./EditExperienceModal";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteExperience,
} from "../../../store/profile/profileSlice";

const formatDate = (isoDateString) => {
  const date = new Date(isoDateString);
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  return `${month}, ${year}`;
};

export default function ExperienceCardComponent(props) {
  const exp = props.experience;
  const dispatch = useDispatch();
  const { authToken } = useSelector((state) => state.auth);
  const deleteExperienceHandler = (id) => {
    dispatch(deleteExperience({ experienceId: exp._id, authToken: authToken }));
    setTimeout(function(){
      window.location.reload();
    }, 3000);
    
    
  };
  const card = (
    <>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {formatDate(exp.tenure.start) + " - " + formatDate(exp.tenure.end)}
        </Typography>
        <Typography variant="h5" component="div">
          {exp.company}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {exp.position}
        </Typography>
        <Typography variant="body2">{exp.description}</Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", flexDirection: "column" }}>
        <Button
          sx={{ margin: "1rem 0rem 1rem 0rem" }}
          variant="outlined"
          onClick={() => deleteExperienceHandler(exp._id)}
          color="error"
          size="small"
        >
          DELETE Experience
        </Button>
        <EditExperienceModal experience={exp} />
      </CardActions>
    </>
  );
  return (
    <Box sx={{ minWidth: "30%", maxWidth: "45%" }}>
      <Card
        sx={{
          margin: "1rem 0rem 1rem 0rem",
          boxShadow: "10px 5px 5px rgba(75, 0, 130,0.5)",
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
