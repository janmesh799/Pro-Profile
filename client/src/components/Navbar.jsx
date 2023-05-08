import { Link } from "react-router-dom"
import './Navbar.css'
import Logo from "../Logo.png"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
// import { logout, getUser } from '../controllers/userController'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { logout } from "../store/auth/authSlice"


const Navbar = () => {
  // const page = "home";
  const { user, isLoggedIn } = useSelector(state => state.auth);
  let username = null;
  if (user) username = user.username;
  const { page } = useSelector(state => state.application)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(logout());
  }
  useEffect(() => {

    if (localStorage.getItem('token')) {
      // dispatch(getUser());
    }
  }, [isLoggedIn])

  return (
    <div>
      <div className='navbar'>
        <img alt="logo" src={Logo} className='logo' />
        <div className="nav-links">
          <Link className={page === "home" ? `active-nav-link` : `nav-link`} to='/' >
            <button>HOME</button>
          </Link>
          {
            isLoggedIn ? <>
              <Link className={page === "" ? `active-nav-link` : `nav-link`} to={`/profile`}>
                <button>{username.toUpperCase()}</button>
              </Link>
              <Link onClick={logoutHandler} className={page === "" ? `active-nav-link` : `nav-link`} to='/' >
                <button>LOGOUT</button>
              </Link>
            </> : <>

              <Link className={page === "login" ? `active-nav-link` : `nav-link`} to='/login' >
                <button>LOGIN</button>
              </Link>
              <Link className={page === "signup" ? `active-nav-link` : `nav-link`} to='/signup' >
                <button>SIGNUP</button>
              </Link>
            </>


          }

        </div>
      </div>

    </div>
  )
}

export default Navbar