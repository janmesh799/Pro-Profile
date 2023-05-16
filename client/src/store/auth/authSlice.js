import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from './authService';

const authToken = localStorage.getItem('authToken');
const initialState = {
    isLoggedIn: false,
    isLoading: false,
    user: null,
    authToken: authToken ? authToken : null,
    isError: false,
    errorMessage: null,
    // isSelfProfile: false,
    // selfProfile: null
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
export const signup = createAsyncThunk('auth/signup', async (userData, thunkAPI) => {
    try {
        const response = await authService.signup(userData);
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
// export const getSelfProfile = createAsyncThunk('auth/getSelfProfile', async (username, thunkAPI) => {
//     try {
//         const response = await profileService.getProfile(username);
//         if (response.success) return response;
//         else {
//             throw new Error(response.message);
//         }
//     } catch (error) {
//         const message = (error.response && error.response.data && error.response.data.message) || (error.message) || error.toString();
//         return thunkAPI.rejectWithValue(message);
//     }
// })
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
        },
        setErrorNull: (state) => {
            state.isError = false;
            state.errorMessage = null;
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
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isLoggedIn = false;
                state.authToken = null;
                state.user = null;
                state.isError = true;
                state.errorMessage = "Please enter correct credentials";
            })
            .addCase(signup.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(signup.fulfilled, (state, action) => {
                if (action.payload.success) {
                    state.isLoading = false;
                    state.isLoggedIn = true;
                    state.authToken = action.payload.authToken;
                    state.user = action.payload.newUser;
                    localStorage.setItem('authToken', state.authToken)
                }
            })
            .addCase(signup.rejected, (state, action) => {
                state.isLoading = false;
                state.isLoggedIn = false;
                state.authToken = null;
                state.user = null;
                state.isError = true;
                state.errorMessage = "Signup failed, try again after some time.";

            })
            .addCase(getUser.pending, (state) => {
                state.isLoggedIn = false;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isLoggedIn = true;
                state.user = action.payload.user.user;
            })
            .addCase(getUser.rejected, (state, action) => {
                state.isLoggedIn = false;
                state.isLoading = false;
                state.authToken = null;
                state.user = null;
                state.isError = true;
                state.errorMessage = action.payload;
                localStorage.removeItem('authToken')
            })
            // .addCase(getSelfProfile.pending, (state) => {
            //     state.isSelfProfile = false;
            //     state.selfProfile = null;
            // })
            // .addCase(getSelfProfile.fulfilled, (state, action) => {
            //     console.log("action.payload.profile=>", action.payload.profile)
            //     state.isSelfProfile = true;
            //     state.selfProfile = action.payload.profile;
            // })
            // .addCase(getSelfProfile.rejected, (state) => {
            //     state.isSelfProfile = false;
            //     state.selfProfile = null;
            // })
    }
});

export const { reset, logout, setErrorNull } = authSlice.actions;
export default authSlice.reducer;
