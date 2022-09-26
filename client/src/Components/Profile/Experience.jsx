import React from "react";
import { useSelector } from "react-redux";
import { Container } from "@mui/system";
import { Typography, Card } from "@mui/material";
const Experience = () => {
  const state = useSelector((state) => state);
  const experience = state.user.experience;
  return (
    <div>
      <Container sx={{ display: "flex", flexWrap: "wrap",justifyContent:"center",alignContent:"center" }}>
        {experience.map((exp) => {
          return (
            <Card
              key={exp.from_year}
              sx={{
                margin: "2em",
                padding: "2em",
                boxShadow: " 10px 10px 5px #C4C6E2;",
              }}
              variant="outlined"
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Typography>Organization : </Typography>
                <Typography sx={{ margin: "0em 1em" }}>
                  {" "}
                  {exp.organisation}
                </Typography>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Typography>Role : </Typography>
                <Typography sx={{ margin: "0em 1em" }}> {exp.role} </Typography>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Typography>Tenure : </Typography>
                <Typography sx={{ margin: "0em 1em" }}>
                  {" "}
                  From {exp.from_year} to {exp.to_year}{" "}
                </Typography>
              </div>

              {exp.description ? (
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Typography>Description : </Typography>
                  <Typography sx={{ margin: "0em 1em" }}>
                    {" "}
                    {exp.description}{" "}
                  </Typography>
                </div>
              ) : (
                <div></div>
              )}
            </Card>
          );
        })}
      </Container>
    </div>
  );
};

export default Experience;
