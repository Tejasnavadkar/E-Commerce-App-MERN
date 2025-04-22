import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CreateOrder, fetchAllOrders, updateOrder } from "./Orders_Api";


export const createOrderAsync = createAsyncThunk('orderSlice/createOrder', async (payload, { rejectWithValue }) => {

    try {

        const data = await CreateOrder(payload)
        return data

    } catch (error) {
        return rejectWithValue(error.message || error)
    }

})

export const fetchAllOrdersAsync = createAsyncThunk('Productlist/fetchAllOrders', async ({pagination,sort}, { rejectWithValue }) => {
    try {
        return await fetchAllOrders({pagination,sort})
    } catch (error) {
        return rejectWithValue(error.message || error)
    }
})

export const updateOrderAsync = createAsyncThunk('orderSlice/updateOrder', async (payload, { rejectWithValue }) => {

    try {

        const data = await updateOrder(payload)
        return data

    } catch (error) {
        return rejectWithValue(error.message || error)
    }

})

const initialState = {
    orders: null,
    allOrders:[],
    ordersPages:0,
    totalOrdersCount:0,
    isLoading: false,
    error: null,
    currentOrder: null
}
const orderSlice = createSlice({
    name: 'orderSlice',
    initialState,
    reducers: {
        ClearCurrentOrder: (state) => {
            state.currentOrder = null
        }
    },
    extraReducers(builder) {
        // add extraReducers

        // createOrderAsync reducers
        builder.addCase(createOrderAsync.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        builder.addCase(createOrderAsync.fulfilled, (state, action) => {
            state.orders = action.payload
            state.isLoading = false;
            state.error = null
            state.currentOrder = action.payload
        })
        builder.addCase(createOrderAsync.rejected, (state, action) => {
            state.error = action.error;
            state.isLoading = false;
        })

        // Fetch All orders
        builder.addCase(fetchAllOrdersAsync.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchAllOrdersAsync.fulfilled, (state, action) => {
            state.isLoading = false
            state.allOrders = action.payload.data
            state.ordersPages = action.payload.pages
            state.totalOrdersCount = action.payload.items
            
        })
        builder.addCase(fetchAllOrdersAsync.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })

         // updateOrderAsync reducers
         builder.addCase(updateOrderAsync.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        builder.addCase(updateOrderAsync.fulfilled, (state, action) => {
           const index = state.allOrders.findIndex((item)=>item.id == action.payload.id)
            state.allOrders[index] = action.payload
            state.isLoading = false;
        })
        builder.addCase(updateOrderAsync.rejected, (state, action) => {
            state.error = action.error;
            state.isLoading = false;
        })
    }
})

export const orderSelector = (state) => state.Orders.orders
export const selectCurrentOrder = (state) => state.Orders.currentOrder
export const ordersSelectorForAdmin = (state) => state.Orders.allOrders
export const ordersPagesSelector = (state) => state.Orders.ordersPages
export const totalOrdersCountSelector = (state) => state.Orders.totalOrdersCount

export const { ClearCurrentOrder } = orderSlice.actions
export default orderSlice.reducer