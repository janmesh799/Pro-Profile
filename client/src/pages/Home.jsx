import React from 'react'
import SearchProfile from '../components/SearchProfile'
import { useLocation } from 'react-router-dom'
import ProfileComponent from '../components/ProfileComponent'

const Home = () => {
    const param = new URLSearchParams(useLocation().search)
    const username = param.get('username')

    return (
        <div style={{margin:"0.5rem"}}>

            {!username ? <SearchProfile /> : (<ProfileComponent username={username} />)}

        </div>
    )
}

export default Home