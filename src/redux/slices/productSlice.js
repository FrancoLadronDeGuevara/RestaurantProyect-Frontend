import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../actions/productActions";

const productSlice = createSlice({
    name: 'products',
    initialState: {
        loading: true,
        products: []
    },

    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAllProducts.pending, (state) => {
            state.loading = true;
        })
        .addCase(getAllProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.products = action.payload;
        })
        .addCase(getAllProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    },
})

export default productSlice.reducer;