import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const style ={
  boxStyle:{
    '@media (max-width:480px)':{
     width:"80%"
    },
    width:"35%"
  }
}

export default function AchievementCard(props) {
  const achieve = props.achievement;
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
    </>
  );
  return (
    <Box sx={style.boxStyle}>
      <Card
        sx={{
          margin: "1rem 0.5rem 1rem 0.5rem",
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
