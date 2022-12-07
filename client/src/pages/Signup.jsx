import { FormControl, TextField, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { Container } from '@mui/system'
import React, { useState } from 'react'

const Signup = () => {
    const [creds, setCreds] = useState({
        name: "",
        email: "",
        password: "",
        username: "",
        password2: ""

    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCreds({ ...creds, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = creds;
        console.log(email, password)
    }
    return (
        //name,email,password, password2 ,username
        <div>
            <Container sx={{ display: "flex", justifyContent: "center", marginTop: "8vw" }}>
                <FormControl>
                    <TextField onChange={handleChange} name="name" value={creds.name} sx={{ width: "20vw", margin: "0.5vw 0vw" }} type='text' margin='dense' label='Name' />
                    <TextField onChange={handleChange} name="username" value={creds.username} sx={{ width: "20vw", margin: "0.5vw 0vw" }} type='text' margin='dense' label='Username' />
                    <TextField onChange={handleChange} name="email" value={creds.email} sx={{ width: "20vw", margin: "0.5vw 0vw" }} type='email' margin='dense' label='Email Address' />
                    <TextField onChange={handleChange} name="password" value={creds.password} sx={{ width: "20vw", margin: "0.5vw 0vw" }} type='password' margin='dense' label='Password' />
                    <TextField onChange={handleChange} name="password2" value={creds.password2} sx={{ width: "20vw", margin: "0.5vw 0vw" }} type='password' margin='dense' label='Confirm Password' />
                    <Button onClick={handleSubmit} sx={{ marginTop: "2rem", fontSize: "1.25rem" }} variant='contained'>Submit</Button>
                    <Typography variant="caption" sx={{ fontSize: "1.5rem", margin: "2rem 0rem" }}>Already have an account? <Link to='/login'>Log in</Link></Typography>
                </FormControl>
            </Container >
        </div>
    )
}

export default Signup