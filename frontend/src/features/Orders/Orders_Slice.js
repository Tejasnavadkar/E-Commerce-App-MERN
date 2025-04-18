import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CreateOrder } from "./Orders_Api";


export const createOrderAsync = createAsyncThunk('orderSlice/createOrder',async (payload,{rejectWithValue})=>{

    try {

        const data = await CreateOrder(payload)
        return data
        
    } catch (error) {
        return rejectWithValue(error.message || error)
    }

})

const initialState = {
    orders:null,
    isLoading:false,
    error:null,
    currentOrder:null
}
const orderSlice = createSlice({
    name:'orderSlice',
    initialState,
    reducers:{
        ClearCurrentOrder:(state)=>{
            state.currentOrder = null
        }
    },
    extraReducers(builder){
        // add extraReducers
        
                 // createOrderAsync reducers
                builder.addCase(createOrderAsync.pending,(state)=>{
                    state.isLoading = true;
                    state.error = null;
                })
                builder.addCase(createOrderAsync.fulfilled,(state,action)=>{
                    state.orders = action.payload
                    state.isLoading = false;
                    state.error = null
                    state.currentOrder = action.payload
                })
                builder.addCase(createOrderAsync.rejected,(state,action)=>{
                    state.error = action.error;
                    state.isLoading = false;
                })
    }
})

export const orderSelector = (state)=>state.Orders.orders
export const selectCurrentOrder = (state)=>state.Orders.currentOrder

export const {ClearCurrentOrder} = orderSlice.actions 
export default orderSlice.reducer