import axios from 'axios'


// const API_URL = 'http://localhost:5000/api/profile'
const API_URL = 'https://pro-profile.vercel.app/api/profile'

//get profile by username
const getProfile = async (username) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "username": username
            }
        }
        console.log(config)
        const response = await axios.get(API_URL + "/getprofile", config);
        return response.data;

    } catch (err) {
        throw new Error(err.message)
    }
}
const profileService = {
    getProfile,
}

export default profileService