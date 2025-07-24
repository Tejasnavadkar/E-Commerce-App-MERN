import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addToCart, deleteCartItemById, fetchCartsByUserId, resetCartByUserId, updateCartById } from "./Cart_Api";

// import axios from "axios";



export const addToCartAsync = createAsyncThunk(
    'cart/addToCart',
    async (item,{rejectWithValue}) => {
        try {
            //   await new Promise((resolve,reject)=> setTimeout(()=>reject(),5000)) 
         const data = await addToCart(item) // this api reload page  coz of this create user api call tree reloades
            return data
        // return item
        } catch (error) {
            // throw new Error('err in addToCartAsync:',error)
            return rejectWithValue(error.message || 'Failed to add cart');
        }
    }
);

export const updateCartQuantityAsync = createAsyncThunk('Cart/updateQuantity',async (update,{rejectWithValue})=>{
    try {
        console.log('update',update)
       const data = await updateCartById(update)
       return data
    } catch (error) {
        return rejectWithValue(error.message || error)
    }
})

export const fetchCartsById = createAsyncThunk('Cart/fetchAllCarts', async (_, { rejectWithValue }) => {
  try {
    return await fetchCartsByUserId()
  } catch (error) {
    return rejectWithValue(error.message || error)
  }
})

export const deleteCartItemAsync = createAsyncThunk('Cart/deleteCartItem',async (itemId,{rejectWithValue})=>{
    try {
        // console.log('update',update)
        // await new Promise((resolve)=>setTimeout(()=>resolve(),5000))
       const data = await deleteCartItemById(itemId)
       return data
    } catch (error) {
        return rejectWithValue(error.message || error)
    }
})

export const resetCartAsync = createAsyncThunk('Cart/resetCart',async (_,{rejectWithValue})=>{
    try {
     
       const data = await resetCartByUserId()  // creat state
       console.log(data)
       return data
    } catch (error) {
        return rejectWithValue(error.message || error)
    }
})


const initialState = {
    cartItems:[],
    isLoading:false,
    error:null,
    cartCheckStatus:false
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
            console.log('cart action--',action.payload)
            state.isLoading = false
            state.cartItems.push(action.payload)
        })
        builder.addCase(addToCartAsync.rejected,(state,action)=>{
            state.isLoading = false
            state.error = action.payload
        })

        //fetch all carts
        builder.addCase(fetchCartsById.pending,(state)=>{
            state.isLoading = true
        })
        builder.addCase(fetchCartsById.fulfilled,(state,action)=>{
            console.log('action-payload-cart',action.payload)
            state.isLoading = false
            state.cartItems = action.payload
            state.cartCheckStatus = true
        })
        builder.addCase(fetchCartsById.rejected,(state,action)=>{
            state.isLoading = false
            state.error = action.payload
            state.cartCheckStatus = true
        })

        //update cart quantity

        builder.addCase(updateCartQuantityAsync.pending,(state)=>{
            state.isLoading = true
        })
        builder.addCase(updateCartQuantityAsync.fulfilled,(state,action)=>{
            state.isLoading = false
            const index = state.cartItems.findIndex((item)=> item.id === action.payload.id)  // here we just find that cart id and replace with our updated cart
            state.cartItems[index] = action.payload
        })
        builder.addCase(updateCartQuantityAsync.rejected,(state,action)=>{
            state.isLoading = false
            state.error = action.payload
        })

        //delete cart item

        builder.addCase(deleteCartItemAsync.pending,(state)=>{
            state.isLoading = true
        })
        builder.addCase(deleteCartItemAsync.fulfilled,(state,action)=>{
            state.isLoading = false
           const index =  state.cartItems.findIndex((item)=>item.id == action.payload.id)
           state.cartItems.splice(index,1)  // here use splice not slice bcoz slice not make change original array splice change the original array
        })
        builder.addCase(deleteCartItemAsync.rejected,(state,action)=>{
            state.isLoading = false
            state.error = action.payload
        })

        // reset cart

        builder.addCase(resetCartAsync.pending,(state)=>{
            state.isLoading = true
        })
        builder.addCase(resetCartAsync.fulfilled,(state)=>{
            state.isLoading = false
           state.cartItems = []  // here use splice not slice bcoz slice not make change original array splice change the original array
        })
        builder.addCase(resetCartAsync.rejected,(state,action)=>{
            state.isLoading = false
            state.error = action.payload
        })
        
    }
})

// export const {} = authSlice.actions

// import in useSelector
export const cartSelector = (state) => state.Cart.cartItems
export const errorSelector = (state) => state.Cart.error
export const cartCheckSelector = (state) => state.Cart.cartCheckStatus

export default cartSlice.reducer