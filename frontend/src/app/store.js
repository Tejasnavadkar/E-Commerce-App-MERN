import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../features/Product-List/ProductSlice'
import authReducer from '../features/Auth/AuthSlice'
import cartReducer from '../features/Cart/CartSlice'
import orderReducer from '../features/Orders/Orders_Slice'


 export const store = configureStore({
    reducer:{
        Products:productReducer,
        Auth:authReducer,
        Cart:cartReducer,
        Orders:orderReducer
    }
})

