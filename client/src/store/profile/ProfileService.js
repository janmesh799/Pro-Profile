import axios from 'axios'
import { Host } from '../../constantVariables'
import { toast } from 'react-toastify'


const API_URL = `${Host}/api/profile`

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

const addEducation = async ({ education, authToken }) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "authToken": authToken
            }
        }
        console.log(config)
        console.log(education)
        const response = await axios.post(API_URL + "/addEducation", education, config);
        return response.data;
    } catch (err) {
        throw new Error(err.message);
    }
}

const deleteEducation = async({educationId, authToken})=>{
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "authToken": authToken,
                "educationId":educationId
            }
        }
        console.log(config)
        const response = await axios.delete(API_URL + "/deleteEducation", config);
        if(response.data.success === true){
            toast.done("deleted education")
        }
        return response.data;
    } catch (err) {
        throw new Error(err.message);
    }
}
const profileService = {
    getProfile,
    addEducation,
    deleteEducation
}

export default profileService