import React, { useState } from 'react'
import { Container } from '@mui/system'
import { TextField, Button, Typography } from '@mui/material'
import { FormControl } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom'

const searchBarStyle = {
  '@media (max-width: 480px)': {
    width: "80vw !important",
    margin: "0rem auto 2rem auto"
  },
  width: "25vw"
}
const formStyle = {
  '@media (max-width: 480px)': {
    flexDirection: "column"
  },
  display: "flex",
  flexDirection: "row",
  margin: "5rem 0rem",
  justifyContent: "center",
  alignContent: "center"
}

const SearchProfile = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")

  const handleChange = (e) => {
    setUsername(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(username)
    navigate('?username=' + username)

  }
  return (
    <Container sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
      <Typography sx={{ margin: "5rem 0rem 0rem 0rem", textAlign: "center" }} variant='h3'>Unleash the Power of Extraordinary <u>Profiles</u></Typography>
      <FormControl onSubmit={handleSubmit} sx={formStyle} >
        <TextField sx={searchBarStyle} onChange={handleChange} name="username" value={username} type='text' margin='dense' label='Enter the username' />
        <Button type="submit" sx={{ backgroundColor: "#fff0", margin: "0rem 1rem", height: "100%", alignSelf: "center", border: "none", boxShadow: "none" }} onClick={handleSubmit} variant='contained'>
          <SearchIcon sx={{ color: "#5271FF", transform: "scale(1.25)" }} fontSize="large" />
        </Button>
      </FormControl>
    </Container>
  )
}

export default SearchProfile