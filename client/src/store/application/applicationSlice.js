
const { createSlice } = require("@reduxjs/toolkit");

const applicationSlice = createSlice({
    name: 'application',
    initialState: {
        page: null,
        profilePage: null,
        isMessage: false,
        message: null,
    },
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload
        },
        setProfilePage: (state, action) => {
            state.profilePage = action.payload
        },
        setMessage: (state, action) => {
            state.isMessage = true;
            state.message = action.payload;
        },
        setMessageNull: (state) => {
            state.isMessage = false
            state.message = null
        }
    },
    extraReducers: {

    }
});


export const { setPage, setProfilePage, setMessage, setMessageNull } = applicationSlice.actions;
export default applicationSlice.reducer;

