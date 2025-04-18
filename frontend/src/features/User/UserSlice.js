import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FetchUserById, FetchUsersOrdersById, updateUser } from "./User_Api";



export const FetchUserInfoByIdAsync = createAsyncThunk('userSlice/fetchUserInfo', async (userId, { rejectWithValue }) => {

    try {
            console.log('user--id',userId)
        const data = await FetchUserById(userId)
        console.log('data',data)
        return data
    } catch (error) {
        return rejectWithValue(error.message || error)
    }

})

export const FetchUserOrdersByIdAsync = createAsyncThunk('userSlice/fetchUsersOrders', async (userId, { rejectWithValue }) => {

    try {

        const data = await FetchUsersOrdersById(userId)
        return data
    } catch (error) {
        return rejectWithValue(error.message || error)
    }

})

export const updateUserAsync = createAsyncThunk('userSlice/updateUser', async (update, { rejectWithValue }) => {

    try {
        const data = await updateUser(update)
        return data
    } catch (error) {
        return rejectWithValue(error.message || error)
    }
})

const initialState = {
    logedInUser: null,
    userInfo: null,
    userOrders: null,
    isLoading: false,
    error: null
}
const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
    extraReducers(builder) {

        //fetch userInfo
        builder.addCase(FetchUserInfoByIdAsync.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(FetchUserInfoByIdAsync.fulfilled, (state, action) => {
            state.isLoading = false
            state.userInfo = action.payload
        })
        builder.addCase(FetchUserInfoByIdAsync.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })

        //fetch user orders
        builder.addCase(FetchUserOrdersByIdAsync.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(FetchUserOrdersByIdAsync.fulfilled, (state, action) => {
            state.isLoading = false
            state.userOrders = action.payload
        })
        builder.addCase(FetchUserOrdersByIdAsync.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })

        // update user in checkout page

        builder.addCase(updateUserAsync.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        builder.addCase(updateUserAsync.fulfilled, (state, action) => {
            state.logedInUser = action.payload;
            state.isLoading = false;
            state.error = null;
        })
        builder.addCase(updateUserAsync.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
            state.logedInUser = null;
        })
    }
})

export const userOrdersSelector = (state) => state.User.userOrders
export const userInfoSelector = (state) => state.User.userInfo  // its different that logged in user
export const userSelector = (state) => state.Auth?.logedInUser

export default userSlice.reducer