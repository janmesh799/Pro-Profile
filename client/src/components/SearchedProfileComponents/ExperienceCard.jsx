import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
const formatDate = (isoDateString) => {
  const date = new Date(isoDateString);
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  return `${month}, ${year}`;
};
const style ={
  boxStyle:{
    '@media (max-width:480px)':{
     width:"80%"
    },
    width:"35%"
  }
}
export default function ExperienceCard(props) {
  const exp = props.experience;
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
    </>
  );
  return (
    <Box sx={style.boxStyle}>
      <Card
        sx={{
          margin: "1rem 0.5rem 1rem 0.5rem",
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
