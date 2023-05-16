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


const style = {
    '@media (max-width: 480px)': {
        flexDirection: "column"
    },
    display: "flex",
    justifyContent: "space-between",
    marginTop: "8vw"
}
const textFieldStyle = {
    '@media (max-width:480px)': {
        fontSize: "0.1rem",
        width: "80vw",
        margin: "1rem auto 1rem auto"
    },
    width: "20vw",
    margin: "0.5vw 0vw"
}
const textStyle = {
    '@media (max-width: 480px)': {
        fontSize: "3rem",
        marginBottom: "1rem"
    },
    margin: '0rem'
}

const buttonStyle = {
    '@media (max-width: 480px)': {
        width: "20rem",
        margin: "auto"
    },
    margin: "2rem auto 0rem auto",
    fontSize: "1.25rem",
    width: "20vw"
}
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
        <Container sx={style}>
            <Container maxWidth="md"  >
                <Typography sx={textStyle} variant='h1'>
                    Welcome Back
                    { // Log in to show the world who you are.
                    }
                </Typography>
                <Typography sx={textStyle} variant='h3'>
                    <u>Resume</u> your journey</Typography>
            </Container>
            <FormControl >
                <TextField onChange={handleChange} name="email" value={creds.email} sx={textFieldStyle} type='email' margin='dense' label='Email Address' />
                <TextField onChange={handleChange} name="password" value={creds.password} sx={textFieldStyle} type='password' margin='dense' label='Password' />
                <Button onClick={handleSubmit} sx={buttonStyle} variant='contained'>Submit</Button>
                <Typography variant="caption" sx={{
                    '@media (max-width: 480px)': {
                        margin:"1rem auto 0rem auto",
                        width:"18rem"
                    }, 
                    fontSize: "1.2rem", 
                    margin: "1rem auto 0rem auto", 
                    width: "18rem"
                }}>Don't have an account? <Link to='/signup'>Create Account</Link></Typography>
            </FormControl>
        </Container >
    )
}

export default Login