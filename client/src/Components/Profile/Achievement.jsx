import React from "react";
import { useSelector } from "react-redux";
import { Container } from "@mui/system";
import { Typography, Card } from "@mui/material";
const Achievement = () => {
  const state = useSelector((state) => state);
  const achievements = state.profile.user.user.achievements;
  achievements.sort(function (a, b) {
    return a.index >= b.index ? 1 : -1;
  });
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection:"column"
      }}
    >
      {achievements.map((achieve) => {
        return (
          <Card
            key={achieve.from_year}
            sx={{
              margin: "1em 1em",
              padding: "2em",
              boxShadow: " 10px 10px 5px #C4C6E2;",
            }}
            variant="outlined"
          >
            {achieve.description ? (
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Typography>{achieve.index} .  </Typography>
                <Typography sx={{ margin: "0em 1em" }}>
                  {" "}
                  {achieve.description}{" "}
                </Typography>
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

export default Achievement;
