import { Typography } from '@mui/material';
import { Container } from '@mui/system'
import React from 'react'

const BioComponent = (props) => {
  const { bio, element } = props;
  return (
    <div>
      <Container maxWidth="xl" sx={{ backgroundColor: "none", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img
            style={{ width: "30%", height: "auto", margin: "none", borderRadius: "50%", justifySelf: "flex-start" }} alt= "profile pic"
            src={bio.profilePic ? bio.profilePic : "https://icon2.cleanpng.com/20180319/xrq/kisspng-neck-sitting-line-male-5ab05067ad9d95.1710165615215043597111.jpg"}
          />
          <div style={{ padding: "1rem", marginLeft: "2rem" }}>
            <Typography variant="h5" >Hi, I am <b>{bio.name} </b> and this is my profile</Typography>
            <Typography variant="h6" >{bio.about} </Typography>

          </div>
        </div>
        <div style={{ justifySelf: "flex-end", backgroundColor: "rgba(150, 200, 249, 0.37)", width: "20vw", padding: "1em" }}>
          <Typography sx={{ textAlign: "center" }} variant="h5" > <u> My contact Details </u></Typography>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", margin: "1rem" }}>
            <Typography sx={{ textAlign: "left", fontWeight: "800", fontSize: "1.1rem" }} variant="body1">
              Email: <a href={`mailto:${bio.email}`}> {bio.email}</a>
            </Typography>
            <Typography sx={{ textAlign: "center", fontWeight: "800", fontSize: "1.3rem" }} variant="body1">
              Phone: <a href={`tel:${bio.contact.phone}`}> {bio.contact.phone}</a>
            </Typography>
          </div>
        </div>
      </Container>
      {element === "PROJECTS" && <Typography sx={{ textAlign: "center" }} variant='h4'>These are my <b> Projects</b></Typography>}
      {element === "ACHIEVEMENTS" && <Typography sx={{ textAlign: "center" }} variant='h4'>These are my <b> Achievements</b></Typography>}
      {element === "SKILLS" && <Typography sx={{ textAlign: "center" }} variant='h4'>These are my <b> Skills</b></Typography>}
      {element === "EDUCATION" && <Typography sx={{ textAlign: "center" }} variant='h4'>These are my <b>Qualifications</b> </Typography>}
      {element === "EXPERIENCE" && <Typography sx={{ textAlign: "center" }} variant='h4'>These are my <b> Experiences</b></Typography>}
      {element === "SOCIALS" && <Typography sx={{ textAlign: "center" }} variant='h4'>These are my <b> Socail Handles </b></Typography>}
    </div>
  )
}

export default BioComponent