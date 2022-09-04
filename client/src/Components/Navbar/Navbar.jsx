import React from "react";
import {  Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const Navbar = () => {
  let ifLoggedIn = false;
  return (
    <div
      style={{
        margin: "1rem 0rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between ",
        alignContent: "center",
      }}
    >
      <div>
        <Button sx={{ marginLeft: "1rem" }} size="large">
          <Typography variant="h5">
            <Link style={{textDecoration:"none",color:"blue"}} to="/">
                Profile Creator
                </Link>
          </Typography>
        </Button>
      </div>
      <div style={{ marginRight: "1rem" }}>
        {ifLoggedIn ? (
          <div>
            <Button
              variant="contained"
              color="primary"
              sx={{ margin: "0rem 1rem" }}
            >
              <Typography>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/login"
                >
                  Login
                </Link>
              </Typography>
            </Button>
            <Button
              variant="contained"
              color="secondary"
              sx={{ margin: "0rem 1rem" }}
            >
              <Typography>
                {" "}
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/login"
                >
                  Signup
                </Link>
              </Typography>
            </Button>
          </div>
        ) : (
          <div>
            <Button
              variant="contained"
              color="secondary"
              sx={{ margin: "0rem 1rem" }}
            >
              <Typography>
                {" "}
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/login"
                >
                  Username
                </Link>
              </Typography>
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ margin: "0rem 1rem" }}
            >
              <Typography>Logout</Typography>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
