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

export default function EducationCard(props) {
  const edu = props.education;
  const card = (
    <>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {formatDate(edu.tenure.start) + " - " + formatDate(edu.tenure.end)}
        </Typography>
        <Typography variant="h5" component="div">
          {edu.institute}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {edu.course}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Grade: {edu.grade}
        </Typography>
        <Typography variant="body2">{edu.description}</Typography>
      </CardContent>
    </>
  );
  return (
    <Box sx={{ minWidth: "20%" , maxWidth:"40%"}}>
      <Card
        sx={{
          margin: "1rem 0.5rem 1rem 0.5rem",
          boxShadow: "10px 5px 5px rgba(148, 0, 211,0.5)",
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
