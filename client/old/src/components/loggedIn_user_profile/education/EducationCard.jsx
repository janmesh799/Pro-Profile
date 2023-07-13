import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function parseISOString(str) {
    // Create a Date object from the string.
    const date = new Date(str);
  
    // Check if the string is a valid ISO date string.
    if (date.toString() !== str) {
      throw new Error('Invalid ISO date string');
    }
  
    // Return the Date object.
    return date;
  }
  

export default function EducationCard(props) {
    const education = props.education;
  return (
    <Box sx={{ minWidth: "20%", maxWidth:"40%", margin:"1rem 0.5rem"}}>
      <Card variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {parseISOString(education.tenure.start)} - {education.tenure.end}
        </Typography>
        <Typography  variant="h5" component="div">
         PDPM Indian institute of information technology, design and maufacturing, jabalpur
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
      </Card>
    </Box>
  );
}
