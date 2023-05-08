import React, { useEffect } from 'react'
import SearchProfile from '../components/SearchProfile'
import { useLocation } from 'react-router-dom'
import ProfileComponent from '../components/ProfileComponent'
import { useDispatch, useSelector } from 'react-redux'
import { setPage } from '../store/application/applicationSlice'
import { getProfile } from '../store/profile/profileSlice'
import { getUser } from '../store/auth/authSlice'

const Home = () => {
    const { authToken } = useSelector(state => state.auth);
    const param = new URLSearchParams(useLocation().search)
    const username = param.get('username')
    const dispatch = useDispatch()
    useEffect(() => {
        if (authToken) {
            dispatch(getUser(authToken));
        }
        dispatch(setPage('home'));
        dispatch(getProfile(username));
    }, [dispatch, username, authToken])

    return (
        <div style={{ margin: "0.5rem" }}>

            {!username ? <SearchProfile /> : (<ProfileComponent />)}

        </div>
    )
}

export default Home