import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../features/Product-List/ProductSlice'
import authReducer from '../features/Auth/AuthSlice'
import cartSlice from '../features/Cart/CartSlice'


 export const store = configureStore({
    reducer:{
        Products:productReducer,
        Auth:authReducer,
        Cart:cartSlice
    }
})

