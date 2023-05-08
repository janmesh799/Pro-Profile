import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice.js"
import applicationSlice from "./application/applicationSlice.js";
import profileSlice from "./profile/profileSlice.js";

const store = configureStore({
    reducer: {
        auth: authSlice,
        application: applicationSlice,
        profile: profileSlice
    },
});

export default store;
