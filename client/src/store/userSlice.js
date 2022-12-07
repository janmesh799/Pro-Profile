
const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
    name: 'user',
    initialState: {
        islogged: false,
        name: 'name',
        username: 'username',
        email: '',
        alertMessage: '',
        alertSeverity: ''
    },
    reducers: {
        setState: (state, action) => {
            state.islogged = action.payload.islogged;
            state.name = action.payload.name;
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.alertMessage = action.payload.alertMessage;
            state.alertSeverity = action.payload.alertSeverity;
        },
    }
});


export const { setState } = userSlice.actions;
export default userSlice.reducer;

