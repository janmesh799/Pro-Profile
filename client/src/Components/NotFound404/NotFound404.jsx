import React from "react";
import { Container } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound404 = () => {
  return (
    <Container>
      <Typography sx={{ textAlign: "center", margin: "2rem" }} variant="h1">
        404 Not Found
      </Typography>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained">
          <Link to="/">
            <Typography sx={{ textDecoration: "none", color: "white" }}>
              Search Another
            </Typography>
          </Link>
        </Button>
      </Container>
    </Container>
  );
};

export default NotFound404;
