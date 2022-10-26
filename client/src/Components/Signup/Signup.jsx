import { Button, Typography, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
const Signup = () => {
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
                                //   value={creds.username}
                                sx={{ margin: "1rem 0rem", width: "25rem", alignSelf: "center" }}
                                id="name"
                                name="name"
                                label="name"
                                variant="filled"
                            />
                            <TextField
                                //   onChange={handleChange}
                                //   value={creds.username}
                                sx={{ margin: "1rem 0rem", width: "25rem", alignSelf: "center" }}
                                id="username"
                                name="username"
                                label="username"
                                variant="filled"
                            />
                            <TextField
                                //   onChange={handleChange}
                                //   value={creds.username}
                                sx={{ margin: "1rem 0rem", width: "25rem", alignSelf: "center" }}
                                id="email"
                                name="eamil"
                                label="email"
                                variant="filled"
                            />


                            <TextField
                                //   onChange={handleChange}
                                //   value={creds.password}
                                sx={{ margin: "1rem 0rem", width: "25rem", alignSelf: "center" }}
                                id="password"
                                name="password"
                                label="password"
                                variant="filled"
                            />
                            <Button sx={{ margin: "1rem 0rem", width: "10rem", alignSelf: "center" }} type="submit" variant="outlined">
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