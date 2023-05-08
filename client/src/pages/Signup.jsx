import { FormControl, TextField, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { Container } from '@mui/system'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
// import { signup } from '../controllers/userController'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setPage } from '../store/application/applicationSlice'

const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { islogged } = useSelector(state => state.auth);
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
        console.log(creds)
        if (creds.password === creds.password2) {
            const { name, email, password, username } = creds;
            // dispatch(signup({ name, email, password, username }));
        }
    }
    useEffect(() => {
        dispatch(setPage('signup'))
        if(islogged) {
            navigate("/")
        }
    }, [])

    return (
        //name,email,password, password2 ,username
        <div>
            <Container sx={{ display: "flex", justifyContent: "space-between", marginTop: "8vw" }}>
                <FormControl>
                    <TextField onChange={handleChange} name="name" value={creds.name} sx={{ width: "20vw", margin: "0.5vw 0vw" }} type='text' margin='dense' label='Name' />
                    <TextField onChange={handleChange} name="username" value={creds.username} sx={{ width: "20vw", margin: "0.5vw 0vw" }} type='text' margin='dense' label='Username' />
                    <TextField onChange={handleChange} name="email" value={creds.email} sx={{ width: "20vw", margin: "0.5vw 0vw" }} type='email' margin='dense' label='Email Address' />
                    <TextField onChange={handleChange} name="password" value={creds.password} sx={{ width: "20vw", margin: "0.5vw 0vw" }} type='password' margin='dense' label='Password' />
                    <TextField onChange={handleChange} name="password2" value={creds.password2} sx={{ width: "20vw", margin: "0.5vw 0vw" }} type='password' margin='dense' label='Confirm Password' />
                    <Button onClick={handleSubmit} sx={{ width: "20vw", marginTop: "2rem", fontSize: "1.25rem" }} variant='contained'>Submit</Button>
                    <Typography variant="caption" sx={{ fontSize: "1.2rem", margin: "2rem 0rem", width: "20vw" }}>Already have an account? <Link to='/login'>Log in</Link></Typography>
                </FormControl>
                <Container maxWidth="mx" sx={{ margin: '0rem 0rem 0rem 30%', width:"70vw" }}>
                    <Typography variant='h1'>
                        Sign Up and Shine!
                        { // Log in to show the world who you are.
                        }
                    </Typography>
                    <Typography variant='h3'>
                        Unlock Your Profile Potential</Typography>
                </Container>
            </Container >
        </div>
    )
}

export default Signup