import React from 'react'
import { Button, Container, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { logout, getUser } from '../controllers/userController'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'



const Navbar = () => {
  const { username, islogged } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(logout())
    window.location.reload(true);
  }
  useEffect(() => {

    if (localStorage.getItem('token')) {
      dispatch(getUser());
    }
  }, [islogged])

  // const islogged = false;
  // const username = "janmesh799"
  return (
    <Container maxWidth="false" sx={{ display: "flex", alignContent: "center", justifyContent: "space-between" }}>
      <span >
        <Typography variant='h5'>
          PR0PROFILE
        </Typography>
      </span>
      <Container sx={{ display: "flex", justifyContent: "flex-end", margin: "0rem 2rem 0rem 0rem" }}>
        <Link to='/' >
          <Button style={{ margin: "0rem 1rem" }}>
            <Typography sx={{ fontSize: "1.5rem", textDecoration: "none" }} >
              Home
            </Typography>
          </Button>
        </Link>
        <Link to='/about' >
          <Button style={{ margin: "0rem 1rem" }}>
            <Typography sx={{ fontSize: "1.5rem", textDecoration: "none" }}>
              About
            </Typography>
          </Button>
        </Link>
        {islogged ? (<div>
          <Link to='/profile' >
            <Button style={{ margin: "0rem 0.5rem" }}>
              <Typography sx={{ fontSize: "1.5rem", textDecoration: "none" }}>
                {username}
              </Typography>
            </Button>
          </Link>

          <Button onClick={logoutHandler} variant='contained' disableElevation style={{ margin: "0rem 0.5rem" }}>
            <Typography sx={{ fontSize: "1.5rem", textDecoration: "none" }}>
              Logout
            </Typography>
          </Button>
        </div>
        ) : (
          <Link to='/login' >
            <Button variant='contained' disableElevation style={{ margin: "0rem 0.5rem" }}>
              <Typography sx={{ fontSize: "1.5rem", textDecoration: "none" }}>
                Login
              </Typography>
            </Button>
          </Link>
        )}

      </Container>
    </Container >
  )
}

export default Navbar