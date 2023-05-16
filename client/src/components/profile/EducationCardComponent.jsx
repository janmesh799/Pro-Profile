import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditEducationModal from './EditEducationModal';


const formatDate = (isoDateString) => {
  const date = new Date(isoDateString);
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  return `${month}, ${year}`;
};



export default function EducationCardComponent(props) {
  const edu = props.education;
  const deleteEducationHandler = (id) => {
    alert(`delete education with id ${id}`)
  }
  const card = (
    <React.Fragment>
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
        <Typography variant="body2">
          {edu.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", flexDirection: "column" }}>
        <Button sx={{ margin: "1rem 0rem 1rem 0rem" }} variant='outlined' onClick={() => deleteEducationHandler(edu._id)} color='error' size="small">DELETE EDUCATION</Button>
        <EditEducationModal education={edu} />
      </CardActions>
    </React.Fragment>
  );
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card sx={{ margin: "1rem 0rem 1rem 0rem", boxShadow: "10px 5px 5px rgba(82, 113, 255,0.5)" }} variant="outlined">{card}</Card>
      {
        // JSON.stringify(props)
      }
    </Box>
  );
}