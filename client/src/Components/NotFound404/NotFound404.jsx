import React from 'react';
import { Link } from 'react-router-dom'
import { Box, Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

const NotFound404 = () => {
  return (
    <Box
      sx={{
        marginTop:"-7rem",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Typography variant="h1">
              404
            </Typography>
            <Typography variant="h6">
              The Profile you're looking for doesn't exist.
            </Typography>
            <Button variant="contained"><Link to="/">
              <Typography sx={{ textDecoration: "none", color: "white" }}>
                Search Another
              </Typography>
            </Link></Button>
          </Grid>
          <Grid xs={6}>
            <img
              src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
              alt=""
              width={500} height={250}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default NotFound404;

