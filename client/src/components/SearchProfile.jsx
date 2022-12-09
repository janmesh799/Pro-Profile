import React, { useState } from 'react'
import { Container } from '@mui/system'
import { TextField, Button, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom'

const SearchProfile = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")

  const handleChange = (e) => {
    setUsername(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(username)
    navigate(`/?username=${username}`)
  }

  return (
    <div>
      <Container sx={{ height: "80vw", diplay: "flex" }}>
        <Typography sx={{ textAlign: "center" }} variant="h3" > Find some cool <b><u> live</u> </b>Profiles</Typography>
        <Container sx={{ display: "flex", backgroundColor: "#dfe5f9", height: "20vw", borderRadius: "5%", alignContent: "center", justifyContent: "center", marginTop: "2rem" }} maxWidth="sm">
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "row" }}>

            <TextField value={username} onChange={handleChange} sx={{ alignSelf: "center" }} label="Username" variant="outlined" />
            <Button type="submit" sx={{ alignSelf: "center", margin: "2rem" }}>
              <SearchIcon fontSize="large" />
            </Button>

          </form>
        </Container>
      </Container>
    </div>
  )
}

export default SearchProfile