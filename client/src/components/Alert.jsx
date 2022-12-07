import React from 'react'
import { Container } from '@mui/system'
import { Alert as MuiAlert } from '@mui/material'


//error - red
//info - blue
//success - green 
//warning - yellow


const Alert = ({ message, severity }) => {
    const display = message ? "block" : "none"
    return (
        <div style={{height:"3rem", margin:"1rem"}}>
            <Container sx={{ display: `${display}` }} >
                <MuiAlert severity={severity || 'info'}>
                    {message}
                </MuiAlert>

            </Container >
        </div>
    )
}

export default Alert