import React from 'react'
import ApartmentIcon from '@mui/icons-material/Apartment';
import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useSelector } from 'react-redux';

const ExperienceComponent = () => {
  const { experience } = useSelector(state => state.profile);
  return (
    <div style={{ marginTop: "2rem" }}>
      {experience.map((exp) => {
        return (
          <Container style={{ backgroundColor: "#C1D4E3", padding: "1rem", margin: "1rem" }}>

            <div style={{ display: "flex", flexDirection: "row", alignContent: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", flexDirection: "row", alignContent: "center" }}>
                <ApartmentIcon fontSize='large' />
                <Typography variant="h5" style={{ margin: "0rem 1rem", alignSelf: "center", maxWidth: "20rem" }} >  {exp.company} </Typography>
              </div>
            </div>
            <div style={{ marginLeft: "3rem", display: "flex", flexDirection: "column" }}>
              <span style={{ marginTop: "-0.5rem" }}>
                <i> {exp.position}</i>
              </span>
              <span>
                <b>  Tenure: </b> {exp.tenure.start.substr(0, 4)} - {exp.tenure.end.substr(0, 4)}
              </span>
              <span style={{ marginTop: "1rem" }}>
                <Typography variant="body1"> {exp.description} </Typography>
              </span>
            </div>
          </Container>
        )
      })}
    </div>
  )
}

export default ExperienceComponent