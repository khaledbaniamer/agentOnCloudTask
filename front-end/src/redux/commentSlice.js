import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from 'sweetalert2';


export const addComment = createAsyncThunk(
    'comment/addComment',
    async (args)=>{
        const response = await axios.post('http://localhost:3005/addcomment', args)
        if(response.status ==200 || response.status == 201){
            Swal.fire(
                'comment!',
                'Has been Added successfully',
                'success'
              )
        }

        return response.data;
    }
)

export const getComment = createAsyncThunk(
    'comment/getComment',
    async (id)=>{
        
        const response = await axios(`http://localhost:3005/getcomment/${id}`)

        return response.data;
    }
)


const commentSlice = createSlice({
    name:'comments',
    initialState:{comments:[]},
    extraReducers:{
        //get comment for single products
        [getComment.fulfilled]:(state , action)=>{
            state.comments = action.payload;
        },
        [getComment.pending]:(state , action)=>{

        },
        [getComment.rejected]:(state , action)=>{

        },

        //add new comment 
        [addComment.fulfilled]:(state ,action)=>{
            console.log(action)
            state.comments.push(action.payload)
        }
    }
})

export default commentSlice.reducer