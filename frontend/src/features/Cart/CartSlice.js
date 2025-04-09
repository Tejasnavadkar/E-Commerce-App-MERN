import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addToCart, fetchAllCarts } from "./Cart_Api";

// import axios from "axios";



export const addToCartAsync = createAsyncThunk(
    'auth/createUser',
    async (item,{rejectWithValue}) => {
        try {
         const data = await addToCart(item) //  coz of this create user api call tree reloades
            return data
        } catch (error) {
            return rejectWithValue(error.message || 'Failed to create user');
        }
    }
);

export const fetchCarts = createAsyncThunk('CartSlice/fetchCarts', async (_, { rejectWithValue }) => {
  try {
    return await fetchAllCarts()
  } catch (error) {
    return rejectWithValue(error.message || error)
  }
})


const initialState = {
    cartItems:[],
    isLoading:false,
    error:null
}


const cartSlice = createSlice({
    name:'authScartSlicelice',
    initialState,
    reducers:{

    },
    extraReducers(builder){
        //add to cart
        builder.addCase(addToCartAsync.pending,(state)=>{
            state.isLoading = true
        })
        builder.addCase(addToCartAsync.fulfilled,(state,action)=>{
            state.isLoading = false
            state.cartItems.push(action.payload)
        })
        builder.addCase(addToCartAsync.rejected,(state,action)=>{
            state.isLoading = false
            state.error = action.payload
        })

        //fetch all carts
        builder.addCase(fetchCarts.pending,(state)=>{
            state.isLoading = true
        })
        builder.addCase(fetchCarts.fulfilled,(state,action)=>{
            state.isLoading = false
            state.cartItems.push(action.payload)
        })
        builder.addCase(fetchCarts.rejected,(state,action)=>{
            state.isLoading = false
            state.error = action.payload
        })
        
    }
})

// export const {} = authSlice.actions

// import in useSelector
export const cartSelector = (state) => state.Cart.cartItems
export const errorSelector = (state) => state.Cart.error

export default cartSlice.reducer