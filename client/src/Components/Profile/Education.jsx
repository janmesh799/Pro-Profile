import React from "react";
import { useSelector } from "react-redux";
import { Container } from "@mui/system";
import { Typography, Card } from "@mui/material";
const Education = () => {
  const state = useSelector((state) => state);
  const education = state.user.education;
  return (
    <Container sx={{ display: "flex", flexWrap: "wrap",justifyContent:"center",alignContent:"center"  }}>
      {education.map((edu) => {
        return (
          <Card key={edu.from_year} sx = {{margin:"2em",padding:"2em",boxShadow:" 10px 10px 5px #C4C6E2;"}} variant="outlined">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Typography>School/College : </Typography>
              <Typography sx={{ margin: "0em 1em" }}> {edu.college}</Typography>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Typography>Degree : </Typography>
              <Typography sx={{ margin: "0em 1em" }}> {edu.degree} </Typography>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Typography>Batch : </Typography>
              <Typography sx={{ margin: "0em 1em" }}>
                {" "}
                From {edu.from_year} to {edu.to_year}{" "}
              </Typography>
            </div>

            {edu.desc ? (
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Typography>Description : </Typography>
                <Typography sx={{ margin: "0em 1em" }}> {edu.desc} </Typography>
              </div>
            ) : (
              <div></div>
            )}
          </Card>
        );
      })}
    </Container>
  );
};

export default Education;
