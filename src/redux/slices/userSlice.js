import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers, getUser, loginUser, logoutUser } from "../actions/userActions";

const userSlice = createSlice({
    name: 'users',
    initialState: {
        isAuthenticated: false,
        loading: true,
        users: []
    },

    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(getUser.pending, (state) => {
            state.loading = true;
        })
        .addCase(getUser.fulfilled, (state, action) => {
            state.isAuthenticated = true;
            state.loading = false;
            state.error = null;
            state.user = action.payload;
        })
        .addCase(getUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

        .addCase(loginUser.pending, (state) => {
            state.loading = true;
        })
        .addCase(loginUser.fulfilled, (state) => {
            state.isAuthenticated = true;
            state.loading = false;
            state.error = null;
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.isAuthenticated = false;
        })

        .addCase(logoutUser.pending, (state) => {
            state.loading = true;
        })
        .addCase(logoutUser.fulfilled, (state) => {
            state.isAuthenticated = false;
            state.loading = false;
            state.error = null;
        })
        .addCase(logoutUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

        .addCase(getAllUsers.pending, (state) => {
            state.loading = true;
        })
        .addCase(getAllUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.users = action.payload;
        })
        .addCase(getAllUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    },
})

export default userSlice.reducer;