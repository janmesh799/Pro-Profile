import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from './authService';

const authToken = localStorage.getItem('authToken');
const initialState = {
    isLoggedIn: false,
    isLoading: false,
    user: null,
    authToken: authToken ? authToken : null,
};

export const login = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
    try {
        const response = await authService.login(userData);
        // console.log(response);
        if (response.success) return response;
        else {
            throw new Error(response.message);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || (error.message) || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const getUser = createAsyncThunk('auth/getuser', async (authToken, thunkAPI) => {
    try {
        const response = await authService.getUser(authToken);
        // console.log(response);
        if (response.success) return response;
        else {
            throw new Error(response.message);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || (error.message) || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoggedIn = false;
            state.isLoading = false;
            state.user = null;
            state.authToken = null;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.isLoading = false;
            state.user = null;
            state.authToken = null;
            localStorage.removeItem('authToken')
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                if (action.payload.success) {
                    state.isLoading = false;
                    state.isLoggedIn = true;
                    state.authToken = action.payload.authToken;
                    state.user = action.payload.user;
                    localStorage.setItem('authToken', state.authToken)
                }
            })
            .addCase(login.rejected, (state) => {
                state.isLoading = false;
                state.isLoggedIn = false;
                state.authToken = null;
                state.user = null;
            })
            .addCase(getUser.pending, (state) => {
                state.isLoggedIn = false;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isLoggedIn = true;
                state.user = action.payload.user.user;
            })
            .addCase(getUser.rejected, (state) => {
                state.isLoggedIn = false;
                state.isLoading = false;
                state.authToken = null;
                state.user = null;
                localStorage.removeItem('authToken')
            })
    }
});

export const { reset, logout } = authSlice.actions;
export default authSlice.reducer;