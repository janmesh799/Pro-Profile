import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSelfProfile } from '../store/auth/authSlice';

const Profile = () => {
  const dispatch = useDispatch();
  const username = useSelector(state => state.auth.user.username);

  useEffect(() => {
    if (username) {

      dispatch(getSelfProfile());
    }
  }, [username, dispatch])
  return (
    <div>Profile</div>
  )
}

export default Profile