import React from 'react'
import ApartmentIcon from '@mui/icons-material/Apartment';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useSelector } from 'react-redux';

const ProjectsComponent = () => {
  const {project} =useSelector(state=>state.profile);
  return (
    <div style={{ marginTop: "2rem" }}>
      {project.map((proj) => {
        return (
          <Container style={{ backgroundColor: "#C1D4E3", padding: "1rem", margin: "1rem" }}>

            <div style={{ display: "flex", flexDirection: "row", alignContent: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", flexDirection: "row", alignContent: "center" }}>
                <ApartmentIcon fontSize='large' />
                <Typography variant="h5" style={{ margin: "0rem 1rem", alignSelf: "center", maxWidth: "20rem" }} >  {proj.title} </Typography>
              </div>
              <div>
                <a href={proj.links.github} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                  <GitHubIcon fontSize='large' style={{ margin: "0rem 1rem" }} />
                </a>
                <a href={proj.links.live} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                  <LanguageIcon fontSize='large' style={{ margin: "0rem 1rem" }} />
                </a>

              </div>

            </div>
            <div style={{ marginLeft: "3rem", display: "flex", flexDirection: "column" }}>
              <span style={{ marginTop: "-0.5rem" }}>
                {
                  proj.technologies.map((tech) => {
                    return (
                      <span >
                        <i> {tech + `${proj.technologies[proj.technologies.length - 1] === tech ? " " : ", "}`}</i>
                      </span>
                    )
                  })
                }
              </span>
              <span>
              </span>
              <span style={{ marginTop: "1rem" }}>
                <Typography variant="body1"> {proj.description} </Typography>
              </span>
            </div>
          </Container >
        )
      })}
    </div >
  )
}

export default ProjectsComponent