import { FormControl, TextField, Button, Typography } from '@mui/material'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Container } from '@mui/system'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setPage } from '../store/application/applicationSlice'
import { login, setErrorNull } from '../store/auth/authSlice'




const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { islogged, authToken, isError, errorMessage } = useSelector(state => state.auth);


    const [creds, setCreds] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCreds({ ...creds, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = creds;
        dispatch(login({ email, password }))

    }
    useEffect(() => {
        dispatch(setPage('login'))
        if (islogged || authToken) {
            navigate('/')
        }
        if (isError) {
            toast.error(errorMessage);
            dispatch(setErrorNull());
        }

    }, [dispatch, islogged, authToken, navigate, isError, errorMessage])


    return (
        <Container sx={{ display: "flex", justifyContent: "space-between", marginTop: "8vw" }}>
            <Container maxWidth="md" sx={{ margin: '0rem' }}>
                <Typography variant='h1'>
                    Welcome Back
                    { // Log in to show the world who you are.
                    }
                </Typography>
                <Typography variant='h3'>
                    <u>Resume</u> your journey</Typography>
            </Container>
            <FormControl sx={{ backgroundColor: "" }}>
                <TextField onChange={handleChange} name="email" value={creds.email} sx={{ width: "20vw", margin: "0.5vw 0vw" }} type='email' margin='dense' label='Email Address' />
                <TextField onChange={handleChange} name="password" value={creds.password} sx={{ width: "20vw", margin: "0.5vw 0vw" }} type='password' margin='dense' label='Password' />
                <Button onClick={handleSubmit} sx={{ marginTop: "2rem", fontSize: "1.25rem", width: "20vw" }} variant='contained'>Submit</Button>
                <Typography variant="caption" sx={{ fontSize: "1.2rem", margin: "2rem 0rem", width: "20vw" }}>Don't have an account? <Link to='/signup'>Create Account</Link></Typography>
            </FormControl>
        </Container >
    )
}

export default Login