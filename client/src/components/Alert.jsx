import React from 'react'
import { Container } from '@mui/system'
import { Alert as MuiAlert } from '@mui/material'
import { useSelector } from 'react-redux'

//error - red
//info - blue
//success - green 
//warning - yellow


const Alert = () => {
    const { alertMessage, alertSeverity } = useSelector(state => state.user)
    const display = alertMessage ? "block" : "none"
    return (
        <div style={{ margin: "1rem", position: "absolute", zIndex: 9 }}>
            <Container sx={{ display: `${display}` }} >
                <MuiAlert severity={alertSeverity || 'info'}>
                    {alertMessage}
                </MuiAlert>

            </Container >
        </div>
    )
}

export default Alert