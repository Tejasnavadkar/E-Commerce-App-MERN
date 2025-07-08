import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createProduct, FetchAllBrands, FetchAllCategories, FetchAllProducts, FetchAllProductsByFilters, FetchProductById, sortProducts, updateProductById } from "./ProductList_Api";


export const fetchProducts = createAsyncThunk('Productlist/fetchProducts', async (_, { rejectWithValue }) => {
  try {
    return await FetchAllProducts()
  } catch (error) {
    return rejectWithValue(error.message || error)
  }
})

export const fetchProductsById = createAsyncThunk('Productlist/fetchProductsById', async ({id}, { rejectWithValue }) => {
  try {
    return await FetchProductById({id})
  } catch (error) {
    return rejectWithValue(error.message || error)
  }
})

export const FetchAllCategoriesAsync = createAsyncThunk('Productlist/fetchCategories', async (_, { rejectWithValue }) => {
  try {
    return await FetchAllCategories()
  } catch (error) {
    return rejectWithValue(error.message || error)
  }
})

export const FetchAllBrandsAsync = createAsyncThunk('Productlist/fetchBrands', async (_, { rejectWithValue }) => {
  try {
    return await FetchAllBrands()
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

export const createProductAsync = createAsyncThunk('Productlist/createProduct',async (payload,{rejectWithValue})=>{

  try {
    
    const data = await createProduct(payload)
    return data
  } catch (error) {
    return rejectWithValue(error.message || error)
  }
})



export const updateProductByIdAsync = createAsyncThunk('Productlist/updateProduct',async (payload,{rejectWithValue})=>{

  try {
    const data = await updateProductById(payload)
    return data
  } catch (error) {
    return rejectWithValue(error.message || error)
  }
})




const initialState = {
  allProducts: [],
  categories:[],
  brands:[],
  // allOrders:null,
  selectedProductById:null,
  pages:0,
  items:0,
  isLoading: false,
  error: null

}

const ProductSlice = createSlice({
  name: 'ProductSlice',
  initialState,
  reducers: {
    resetSelectedProduct(state) {  // to reset selectedProduct to null
      state.selectedProductById = null
    },

  },
  extraReducers(builder) {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.allProducts = action.payload
      state.isLoading = false
    })
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error
    })

    builder.addCase(FetchAllCategoriesAsync.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(FetchAllCategoriesAsync.fulfilled, (state, action) => {
      state.categories = action.payload
      state.isLoading = false
    })
    builder.addCase(FetchAllCategoriesAsync.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error
    })

    builder.addCase(FetchAllBrandsAsync.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(FetchAllBrandsAsync.fulfilled, (state, action) => {
      state.brands = action.payload
      state.isLoading = false
    })
    builder.addCase(FetchAllBrandsAsync.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error
    })

    builder.addCase(fetchProductsByFilterAsync.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchProductsByFilterAsync.fulfilled, (state, action) => {
      console.log('action-payload--inproductslice--',action.payload)
      if(action.payload.products){
        state.allProducts = action.payload.products
        // state.pages = action.payload.pages
        state.items = action.payload.totalProducts
      state.isLoading = false
      }else{
        state.allProducts = action.payload
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
      state.allProducts = action.payload
      state.isLoading = false
    })
    builder.addCase(sortProductsAsync.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error
    })

    builder.addCase(fetchProductsById.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchProductsById.fulfilled, (state, action) => {
      state.selectedProductById = action.payload
      state.isLoading = false
    })
    builder.addCase(fetchProductsById.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error
    })

    // create Product

    builder.addCase(createProductAsync.pending,(state)=>{
      state.isLoading = true
    })
    builder.addCase(createProductAsync.fulfilled,(state,action)=>{
      state.isLoading = false,
      state.allProducts.push(action.payload)
    })
    builder.addCase(createProductAsync.rejected,(state,action)=>{
      state.isLoading = false
      state.error = action.payload
    })

    // update product
    builder.addCase(updateProductByIdAsync.pending,(state)=>{
      state.isLoading = true
    })
    builder.addCase(updateProductByIdAsync.fulfilled,(state,action)=>{
      state.isLoading = false
      const index = state.allProducts.findIndex((item)=>item.id === action.payload.id)
      state.allProducts[index] = action.payload
    })
    builder.addCase(updateProductByIdAsync.rejected,(state,action)=>{
      state.isLoading = false
      state.error = action.payload
    })

     


  },
})

export const productSelector = (state) => state.Products
export const categoriesSelector = (state) => state.Products.categories
export const brandsSelector = (state) => state.Products.brands
export const ProductByIdSelector = (state) => state.Products.selectedProductById
export const productListStatus = (state) => state.Products.isLoading
export const totalProductCount = (state) => state.Products.items

export const {resetSelectedProduct} = ProductSlice.actions
export default ProductSlice.reducer