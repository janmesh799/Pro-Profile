
const { createSlice } = require("@reduxjs/toolkit");

const applicationSlice = createSlice({
    name: 'application',
    initialState: {
        page: null,
        profilePage: null,
    },
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload
        },
        setProfilePage: (state, action) => {
            state.profilePage = action.payload
        }
    },
    extraReducers: {

    }
});


export const { setPage } = applicationSlice.actions;
export default applicationSlice.reducer;

