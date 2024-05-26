import { createAsyncThunk } from "@reduxjs/toolkit";
import clientAxios from "../../utils/clientAxios";

export const getUser = createAsyncThunk("getUser", async () => {
    const response = await clientAxios.get(`/users/get-user`, {withCredentials: true});
    return response.data;
});

export const loginUser = createAsyncThunk("loginUser", async (payload) => {
    const response = await clientAxios.post(`/users/login-user`, payload);
    return response.data;
});

export const logoutUser = createAsyncThunk("logoutUser", async () => {
    const response = await clientAxios.get(`/users/logout-user`);
    return response.data;
});

export const getAllUsers = createAsyncThunk("getAllUsers", async () => {
    const response = await clientAxios.get(`/users`);
    return response.data;
});
