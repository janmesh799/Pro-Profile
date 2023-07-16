import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { deleteAchievement } from "../../../store/profile/profileSlice";
import EditAchievementModal from "./EditAchievementModal";

export default function AchievementCardComponent(props) {
  const achieve = props.achievement;
  const dispatch = useDispatch();
  const { authToken } = useSelector((state) => state.auth);
  const deleteAchievementHandler = (id) => {
    dispatch(
      deleteAchievement({ achievementId: achieve._id, authToken: authToken })
    );
    setTimeout(function () {
      window.location.reload();
    }, 3000);
  };
  const card = (
    <>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {achieve.index}
        </Typography>
        <Typography variant="h5" component="div">
          {achieve.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {achieve.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", flexDirection: "column" }}>
        <Button
          sx={{ margin: "1rem 0rem 1rem 0rem" }}
          variant="outlined"
          onClick={() => deleteAchievementHandler(achieve._id)}
          color="error"
          size="small"
        >
          DELETE Achievement
        </Button>
        <EditAchievementModal achievement={achieve} />
      </CardActions>
    </>
  );
  return (
    <Box sx={{ minWidth: "30%", maxWidth: "45%" }}>
      <Card
        sx={{
          margin: "1rem 0rem 1rem 0rem",
          boxShadow: "10px 5px 5px rgba(0, 255, 0,0.5)",
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
