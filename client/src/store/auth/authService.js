import axios from 'axios'
import { Host } from '../../constantVariables'

const API_URL = `${Host}/api/auth`

//register user
const signup = async (userData) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const response = await axios.post(API_URL + "/createuser", userData, config);
        // console.log(response)
        return response.data
    } catch (err) {
        throw new Error(err.message)
    }
}

//login user
const login = async (userData) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const response = await axios.post(API_URL + '/login', userData, config)
        // console.log(response)
        return response.data
    } catch (err) {
        throw new Error(err.message)
    }

}

// getting loggedin user details
const getUser = async (authToken) => {
    try {
        const config = {
            headers: {
                "authToken": authToken
            }
        }
        // console.log(config)

        const response = await axios.get(API_URL + '/getuser', config);
        return response.data;

    } catch (err) {
        throw new Error(err.message)
    }
}


//logout user
const logout = async () => {
    localStorage.removeItem('authToken')
}
const authService = {
    signup,
    logout,
    login,
    getUser
}

export default authService