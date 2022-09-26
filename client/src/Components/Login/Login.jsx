import { Button, Typography, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import handleLogin from "./handleLogin";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  //creating a const of creds using useState
  const [creds, setcreds] = useState({
    username: "",
    password: "",
  });

  //handleChange function for updating input of creds
  const handleChange = (e) => {
    const value = e.target.value;
    setcreds({ ...creds, [e.target.name]: value });
  };

  //handleSubmit funtion for submiting the credentials
  const handleSubmit = async (e) => {
    e.preventDefault();

    //handleLogin function authenticates the creds and return appropiate output
    const res = await handleLogin(creds);

    //if creds are correct then storing AuthToken in localstorage
    if (res.success) {
      localStorage.setItem("AuthToken", res.token);
      console.log(localStorage.getItem("AuthToken"));
    } else {

      //else printing error message in console
      console.log(res.message);
    }

    //navigating to the home page
    navigate("/");
  };
  return (
    <div>
      <Container
        sx={{
          backgroundColor: "whitesmoke",
          width: "50%",
          marginTop: "5rem",
          borderRadius: "5%",
        }}
      >
        <Typography
          variant="h3"
          sx={{ paddingTop: "2rem", textAlign: "center" }}
        >
          Login
        </Typography>
        <Container>
          <form onSubmit={handleSubmit}>
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <TextField
                onChange={handleChange}
                value={creds.username}
                sx={{ margin: "3rem" }}
                id="username"
                name="username"
                label="username"
                variant="filled"
              />
              <TextField
                onChange={handleChange}
                value={creds.password}
                sx={{ margin: "3rem" }}
                id="password"
                name="password"
                label="password"
                variant="filled"
              />
              <Button sx={{ margin: "2rem" }} type="submit" variant="outlined">
                <Typography>Submit</Typography>
              </Button>
            </Container>
          </form>
        </Container>
      </Container>
    </div>
  );
};

export default Login;
