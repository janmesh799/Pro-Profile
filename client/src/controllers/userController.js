import axios from 'axios';
import {setState} from '../store/userSlice.js'

export function login({ email, password }) {
    return async function (dispatch) {
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            console.log(res.data);
            if (res.data.success) {
                console.log("success = true")
                dispatch(setState({
                    islogged: true,
                    name: res.data.user.name,
                    username: res.data.user.username,
                    email: res.data.user.email,
                    alertMessage: res.data.message,
                    alertSeverity: 'success'
                }));
                localStorage.setItem('token', res.data.authToken);
            }
            else {
                dispatch(setState({
                    islogged: false,
                    name: '',
                    username: '',
                    email: '',
                    alertMessage: res.data.message,
                    alertSeverity: 'error'
                }));

            }
        } catch (error) {
            console.log(error);
        }
    }
}

export function getUser() {
    return async function (dispatch) {
        try {
            const res = await axios.get('http://localhost:5000/api/auth/getUser', {
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')
                }
            });
            console.log(res.data);
            if (res.data.success) {
                dispatch(setState({
                    islogged: true,
                    name: res.data.user.name,
                    username: res.data.user.username,
                    email: res.data.user.email,
                    alertMessage: res.data.message,
                    alertSeverity: 'success'
                }));
            }
            else {
                dispatch(setState({
                    islogged: false,
                    name: '',
                    username: '',
                    email: '',
                    alertMessage: res.data.message,
                    alertSeverity: 'error'
                }));
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export function logout() {
    return async function (dispatch) {
        try {
            localStorage.removeItem('token');
            dispatch(setState({
                islogged: false,
                name: '',
                username: '',
                email: '',
                alertMessage: 'Logout Successful',
                alertSeverity: 'success'
            }));

        } catch (error) {
            console.log(error);
        }
    }
}