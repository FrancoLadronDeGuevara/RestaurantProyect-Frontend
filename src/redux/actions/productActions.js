import { createAsyncThunk } from "@reduxjs/toolkit";
import clientAxios from "../../utils/clientAxios";

export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
    const response = await clientAxios.get(`/products/`);
    return response.data;
});