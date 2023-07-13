import React from 'react'
import SchoolIcon from '@mui/icons-material/School';
import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useSelector } from 'react-redux';

const EducationComponent = () => {
  const { education } = useSelector(state => state.profile)
  if (education === null || education === []) {
    return (
      <div style={{ marginTop: "2rem" }}>
      <Typography variant='h2'> Nothing to show here!</Typography>
      </div>
    )
  }
  return (
    <div style={{ marginTop: "2rem" }}>
      {education.map((edu) => {
        return (
          <Container style={{ backgroundColor: "#CCE8DB", padding: "1rem", margin: "1rem" }}>

            <div style={{ display: "flex", flexDirection: "row", alignContent: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", flexDirection: "row", alignContent: "center" }}>
                <SchoolIcon fontSize='large' />
                <Typography variant="h5" style={{ margin: "0rem 1rem", alignSelf: "center", maxWidth: "20rem" }} >  {edu.institute} </Typography>
              </div>
              <span style={{ justifySelf: "flex-end", padding: "0rem 2rem 0rem 0rem" }}>
                <i>  <b>Grade:</b> {edu.grade}</i>
              </span>
            </div>
            <div style={{ marginLeft: "3rem", display: "flex", flexDirection: "column" }}>
              <span style={{ marginTop: "-0.5rem" }}>
                <i> {edu.course}</i>
              </span>
              <span>
                <b>  Batch: </b> {edu.tenure.start.substr(0, 4)} - {edu.tenure.end.substr(0, 4)}
              </span>
              <span style={{ marginTop: "1rem" }}>
                <Typography variant="body1"> {edu.description} </Typography>
              </span>
            </div>
          </Container>
        )
      })}
    </div>
  )
}

export default EducationComponent