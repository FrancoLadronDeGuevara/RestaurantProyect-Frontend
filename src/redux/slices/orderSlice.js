import { createSlice } from "@reduxjs/toolkit";
import { createOrder, deleteOrder, editOrder, getOrders } from "../actions/orderActions";

const orderSlice = createSlice({
    name: 'orders',
    initialState: {
        loading: true,
        orders: []
    },

    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(getOrders.pending, (state) => {
            state.loading = true;
        })
        .addCase(getOrders.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.orders = action.payload
        })
        .addCase(getOrders.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

        .addCase(createOrder.pending, (state) => {
            state.loading = true;
        })
        .addCase(createOrder.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.orders.push(action.payload)
        })
        .addCase(createOrder.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

        .addCase(editOrder.pending, (state) => {
            state.loading = true;
        })
        .addCase(editOrder.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.orders = state.orders.map(order => order._id === action.payload._id ? action.payload : order)
        })
        .addCase(editOrder.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

        .addCase(deleteOrder.pending, (state) => {
            state.loading = true;
        })
        .addCase(deleteOrder.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.orders = state.orders.filter(order => order._id !== action.payload)
        })
        .addCase(deleteOrder.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    },
})

export default orderSlice.reducer;