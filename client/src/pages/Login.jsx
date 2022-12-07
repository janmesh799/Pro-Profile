import { FormControl, TextField, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Container } from '@mui/system'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../controllers/userController'



const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { islogged } = useSelector(state => state.user);

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
        if (islogged) {
            navigate('/')
        }
    }, [islogged])


    return (
        <Container sx={{ display: "flex", justifyContent: "center", marginTop: "8vw" }}>
            <FormControl>
                <TextField onChange={handleChange} name="email" value={creds.email} sx={{ width: "20vw", margin: "0.5vw 0vw" }} type='email' margin='dense' label='Email Address' />
                <TextField onChange={handleChange} name="password" value={creds.password} sx={{ width: "20vw", margin: "0.5vw 0vw" }} type='password' margin='dense' label='Password' />
                <Button onClick={handleSubmit} sx={{ marginTop: "2rem", fontSize: "1.25rem" }} variant='contained'>Submit</Button>
                <Typography variant="caption" sx={{ fontSize: "1.5rem", margin: "2rem 0rem" }}>Don't have an account? <Link to='/signup'>Sign Up</Link></Typography>
            </FormControl>
        </Container >
    )
}

export default Login