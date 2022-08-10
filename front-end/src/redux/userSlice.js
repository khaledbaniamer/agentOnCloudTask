import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import Swal from 'sweetalert2';

export const signup = createAsyncThunk(
    'user/signup',
    async (args )=>{
        const response = await axios.post('http://localhost:3005/addUser' , args);
        console.log(response)

        if(response.status ==200 || response.status == 201){
            Swal.fire(
                'Sign Up!',
                'Has been done successfully',
                'success'
              )
        }
    }
)

export const login = createAsyncThunk(
    'user/login',
    async (args)=>{
        const response = await axios.post('http://localhost:3005/login' , args);
        console.log(response)

        if(response.status == 200 || response.status == 201){
            Swal.fire(
                'Login!',
                'Has been done successfully',
                'success'
              )
        }
        return response.data
    }
)

export const getUser = createAsyncThunk(
    'user/getUser',
    async(id)=>{

        const response =await axios('http://localhost:3005/users')

        return response.data
    }
)

export const logOut = createAsyncThunk(
    'user/logout',
    async (id)=>{
        const response = await axios(`http://localhost:3005/logout/${id}`)

        return response.data;
    }
)

export const getUserItem = createAsyncThunk(
    'user/getUserItem',
    async (id)=>{
        const response =await axios(`http://localhost:3005/useritems/${id}`);

        return response.data;
    }
)


const userSilce = createSlice({
    name:'user',
    initialState:{user:{} , items:[]},
    extraReducers:{
        [login.fulfilled]:(state , action) => {
            console.log(action)
            state.user = action.payload
 
        },
        [login.pending]:(state)=>{
            
        },
        [login.rejected]:(state)=>{

        },

        [getUser.fulfilled]:(state , action) => {
            // console.log(action)
            state.user = action.payload
 
        },
        [getUser.pending]:(state)=>{
            
        },
        [getUser.rejected]:(state)=>{

        },
        [logOut.fulfilled]:(state , action) => {
            // console.log(action)
            state.user = action.payload
 
        },
        [logOut.pending]:(state)=>{
            
        },
        [logOut.rejected]:(state)=>{

        },

        [getUserItem.fulfilled]:(state , action) => {
            // console.log(action)
            state.items = action.payload
 
        },
        [getUserItem.pending]:(state)=>{
            
        },
        [getUserItem.rejected]:(state)=>{

        },
        
    }
})

export default userSilce.reducer