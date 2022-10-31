import { Button, Typography, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import handleSignup from "./handleSignup";
const Signup = () => {
    const [creds, setcreds] = useState({
        name: "", username: "", email: "", password: ""
    })
    const handleChange = (e) => {
        setcreds({ ...creds, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await handleSignup(creds);
        console.log(res)
        if (res.success) {
            localStorage.setItem('AuthToken', res.token);
        }
        else {
            if (res.response && res.response.status !== 200) {
                console.log("request failed")
            }
            else
                console.log("signup failed")
        }
    }
    return (
        <div>
            <Container
                sx={{
                    backgroundColor: "whitesmoke",
                    width: "40%",
                    marginTop: "10rem",
                    borderRadius: "5%",
                }}
            >
                <Typography
                    variant="h3"
                    sx={{ paddingTop: "2rem", textAlign: "center" }}
                >
                    Signup
                </Typography>
                <Container>
                    <form
                    // onSubmit={handleSubmit}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <TextField
                                //   onChange={handleChange}
                                value={creds.name}
                                sx={{ margin: "1rem 0rem", width: "25rem", alignSelf: "center" }}
                                id="name"
                                name="name"
                                label="name"
                                variant="filled"
                                onChange={handleChange}
                            />
                            <TextField
                                //   onChange={handleChange}
                                value={creds.username}
                                sx={{ margin: "1rem 0rem", width: "25rem", alignSelf: "center" }}
                                id="username"
                                name="username"
                                label="username"
                                variant="filled"
                                onChange={handleChange}
                            />
                            <TextField
                                //   onChange={handleChange}
                                value={creds.email}
                                sx={{ margin: "1rem 0rem", width: "25rem", alignSelf: "center" }}
                                id="email"
                                name="email"
                                label="email"
                                variant="filled"
                                onChange={handleChange}
                            />


                            <TextField
                                //   onChange={handleChange}
                                //   value={creds.password}
                                sx={{ margin: "1rem 0rem", width: "25rem", alignSelf: "center" }}
                                id="password"
                                name="password"
                                label="password"
                                variant="filled"
                                onChange={handleChange}
                            />
                            <Button onClick={handleSubmit} sx={{ margin: "1rem 0rem", width: "10rem", alignSelf: "center" }} variant="outlined">
                                <Typography>Submit</Typography>
                            </Button>
                        </div>
                    </form>
                </Container>
            </Container>
        </div>
    )
}

export default Signup