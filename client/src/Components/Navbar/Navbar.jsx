import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const Navbar = () => {
  const state = useSelector((state) => state);
  const [ifLoggedIn, setifLoggedIn] = useState(false);
  const getcreds = () => {
    if (localStorage.getItem("AuthToken")) setifLoggedIn(true);
  };
  const handleLogout = () => {
    localStorage.removeItem("AuthToken");
    setifLoggedIn(false);
  };
  useEffect(() => {
    getcreds();
  }, [ifLoggedIn]);

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
            <Link style={{ textDecoration: "none", color: "blue" }} to="/">
              Profile Creator
            </Link>
          </Typography>
        </Button>
      </div>
      <div style={{ marginRight: "1rem" }}>
        {!ifLoggedIn ? (
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
                  to="/signup"
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
                  to="/editprofile"
                >
                  {state.user.name}
                </Link>
              </Typography>
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ margin: "0rem 1rem" }}
              onClick={handleLogout}
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
