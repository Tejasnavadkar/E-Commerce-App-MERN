import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {  checkAuth, createUser, ForgotPassword, login, SignOutUser } from "./Auth_Api";
import { updateUser } from "../User/User_Api";
// import { data } from "react-router-dom";
// import axios from "axios";






const initialState = {
    logedInUser:null,
    userToken:null,
    isLoading:false,
    error:null,
    userCheck:false
}

export const createUserAsync = createAsyncThunk(
    'auth/createUser',
    async (userData,{rejectWithValue}) => {
        try {
         const data = await createUser(userData) //  coz of this create user api call tree reloades
            return data
        } catch (error) {
            console.log({error})
            return rejectWithValue(error.message || 'Failed to create user');
        }
    }
);

export const loginUserAsync = createAsyncThunk(
    'auth/login',
    async (loginInfo,{rejectWithValue}) => {
        try {
         const data = await login(loginInfo) //  coz of this create user api call tree reloades
        return data
        } catch (error) {
            console.log('checkErrorinlogin-',error.message)
            return rejectWithValue(error.message || 'Failed to login user'); // rejectWithValue catch the err in action.payload in rejected case
        }
    }
);

export const checkUserAsync = createAsyncThunk(
    'auth/checkUser',
    async (_,{rejectWithValue}) => {
        try {
         const data = await checkAuth() //  coz of this create user api call tree reloades
        return data
        } catch (error) {
            console.log('checkErrorinlogin-',error.message)
            return rejectWithValue(error.message || 'Failed to check user'); // rejectWithValue catch the err in action.payload in rejected case
        }
    }
);

export const SignOutUserAsync = createAsyncThunk('Auth/signOut',async (userId,{rejectWithValue})=>{

    try {
        await SignOutUser()
    } catch (error) {
        return rejectWithValue(error.message || error )
    }
})

export const ForgotPasswordAsync = createAsyncThunk('Auth/ForgotPassword',async (email,{rejectWithValue})=>{

    try {
        await ForgotPassword(email)
        // create extraReducers after setup backend stuff
    } catch (error) {
        return rejectWithValue(error.message || error )
    }
})

export const updateUserAsync = createAsyncThunk('auth/updateUser',async (update,{rejectWithValue}) =>{
   
    try {
        const data = await updateUser(update)
        return data
    } catch (error) {
        return rejectWithValue(error.message || error)
    }
})

//   const authSlice = createSlice({
//     name: 'authSlice',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(createUserAsync.pending, (state) => {
//                 state.isLoading = true;
//                 state.error = null;
//                 state.logedInUser = null;
//             })
//             // .addCase(createUserAsync.fulfilled, (state, action) => {
//             //     state.logedInUser = action.payload;
//             //     state.isLoading = false;
//             //     state.error = null;
//             // })
//             .addCase(createUserAsync.rejected, (state, action) => {
//                 state.error = action.payload;
//                 state.isLoading = false;
//                 state.logedInUser = null;
//             });
//     }
// });

const authSlice = createSlice({
    name:'authSlice',
    initialState,
    reducers:{

    },
    extraReducers(builder){

         // createUserAsync reducers
        builder.addCase(createUserAsync.pending,(state)=>{
            state.isLoading = true;
            state.error = null;
        })
        builder.addCase(createUserAsync.fulfilled,(state,action)=>{
            // console.log('action.payload-in-create-user--',action.payload)
            state.logedInUser = action.payload.createdUser;
            state.userToken = action.payload.token;
            state.isLoading = false;
            state.error = null;
        })
        builder.addCase(createUserAsync.rejected,(state,action)=>{
            console.log({action})
            state.error = action.payload;
            state.isLoading = false;
            state.logedInUser = null;
        })

        // loginUserAsync reducers
        builder.addCase(loginUserAsync.pending,(state)=>{
            state.isLoading = true;
            state.error = null;
        })
        builder.addCase(loginUserAsync.fulfilled,(state,action)=>{
            state.logedInUser = action.payload.User;
            state.userToken = action.payload.token;
            state.isLoading = false;
            state.error = null;
         
        })
        builder.addCase(loginUserAsync.rejected,(state,action)=>{
            console.log('user---check')
            state.error = action.payload;
            state.isLoading = false;
            state.logedInUser = null;
            
        })

         // checkUserAsync reducers
        builder.addCase(checkUserAsync.pending,(state)=>{
            state.isLoading = true;
            state.error = null;
        })
        builder.addCase(checkUserAsync.fulfilled,(state,action)=>{
            state.logedInUser = action.payload.User;
            state.isLoading = false;
            state.error = null;
            state.userCheck = true
         
        })
        builder.addCase(checkUserAsync.rejected,(state,action)=>{
            console.log('user---check')
            // state.error = action.payload;
            state.isLoading = false;
            state.logedInUser = null;
            state.userCheck = true
            
        })

         // SignOut User reducers
         builder.addCase(SignOutUserAsync.pending,(state)=>{
            state.isLoading = true;
            state.error = null;
        })
        builder.addCase(SignOutUserAsync.fulfilled,(state)=>{
            state.logedInUser = null;
            state.isLoading = false;
            state.error = null;
        })
        builder.addCase(SignOutUserAsync.rejected,(state,action)=>{
            state.error = action.payload;
            state.isLoading = false;
            state.logedInUser = null;
        })

        // update user in checkout page

        builder.addCase(updateUserAsync.pending,(state)=>{
            state.isLoading = true;
            state.error = null;
        })
        builder.addCase(updateUserAsync.fulfilled,(state,action)=>{
            state.logedInUser = action.payload;
            state.isLoading = false;
            state.error = null;
        })
        builder.addCase(updateUserAsync.rejected,(state,action)=>{
            state.error = action.payload;
            state.isLoading = false;
            state.logedInUser = null;
        })
    }
})

// export const {} = authSlice.actions

// import in useSelector
export const userSelector = (state) => state.Auth?.logedInUser
export const userTokenSelector = (state) => state.Auth?.userToken
export const errorSelector = (state) => state.Auth?.error
export const userCheck = (state) => state.Auth?.userCheck

export default authSlice.reducer