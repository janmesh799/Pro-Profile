
const { createSlice } = require("@reduxjs/toolkit");

const authToken = localStorage.getItem('authToken')

const userSlice = createSlice({
    name: 'user',
    initialState: {
        islogged: false,
        name: 'name',
        username: 'username',
        email: '',
        authToken: authToken ? authToken : null,
    },
    reducers: {

        reset: (state) => {
            state.islogged = false
            state.name = null
            state.username = null
            state.email = null
            state.authToken = null
        }
    },
    extraReducers: {

    }
});


export const { setState } = userSlice.actions;
export default userSlice.reducer;

