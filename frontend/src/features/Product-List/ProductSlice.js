import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FetchAllProducts, FetchAllProductsByFilters, sortProducts } from "./ProductList_Api";


export const fetchProducts = createAsyncThunk('Productlist/fetchProducts', async (_, { rejectWithValue }) => {
  try {
    return await FetchAllProducts()
  } catch (error) {
    return rejectWithValue(error.message || error)
  }
})

export const fetchProductsByFilterAsync = createAsyncThunk('productlist/fetchProductsByFilterAsync', async ({filter,sort,pagination}, { rejectWithValue }) => {
  try {
    return await FetchAllProductsByFilters({filter,sort,pagination})
  } catch (error) {
    return rejectWithValue(error.message || error)
  }
})

export const sortProductsAsync = createAsyncThunk('productlist/sortProductAsync', async (payload, { rejectWithValue }) => {
  try {
    return await sortProducts(payload)
  } catch (error) {
    return rejectWithValue(error.message || error)
  }
})


const initialState = {
  products: [],
  pages:0,
  items:0,
  isLoading: false,
  error: null

}

const ProductSlice = createSlice({
  name: 'ProductSlice',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload
      state.isLoading = false
    })
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error
    })

    builder.addCase(fetchProductsByFilterAsync.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchProductsByFilterAsync.fulfilled, (state, action) => {
      if(action.payload.data){
        state.products = action.payload.data
        state.pages = action.payload.pages
        state.items = action.payload.items
      state.isLoading = false
      }else{
        state.products = action.payload
        state.pages = action.payload.pages
        state.isLoading = false
      }
     
    })
    builder.addCase(fetchProductsByFilterAsync.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error
    })


    builder.addCase(sortProductsAsync.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(sortProductsAsync.fulfilled, (state, action) => {
      state.products = action.payload
      state.isLoading = false
    })
    builder.addCase(sortProductsAsync.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error
    })
  }
})

export const productSelector = (state) => state.Products

// export const {} = ProductSlice.actions
export default ProductSlice.reducer