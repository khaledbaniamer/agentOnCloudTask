import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import Swal from 'sweetalert2';


export const getItems = createAsyncThunk(
    'items/getItems',
    async ()=>{
        const response = await axios('http://localhost:3005/item')
        // console.log(response)
        return response.data
    }
);

export const getSingleItem = createAsyncThunk(
    'items/getSingleItem',
    async (id)=>{
        const response = await axios.get(`http://localhost:3005/item/${id}`)

        return response.data;
    }
)

export const addItem = createAsyncThunk(
    'items/addItem',
    async (args)=>{
        const response =await axios.post( 'http://localhost:3005/addItem',args );
        // console.log(response)

        if(response.status ==200 || response.status == 201){
            Swal.fire(
                'Item!',
                'Has been Added successfully',
                'success'
              )
        }
    }
)

export const deleteItem = createAsyncThunk(
    'item/deleteItem',
    async (args)=>{
        console.log(args)
        const response = await axios.post(`http://localhost:3005/deleteItem/${args}` )

        if(response.status == 200 || response.status ==201){
            window.location.reload(false);
        }
        return response.data
    }
)

export const updateItem = createAsyncThunk(
    'items/updateItem',
    async (args)=>{
        console.log(args)
        const response = await axios.post(`http://localhost:3005/updateItem/${args.id}`,args)
        if(response.status ==200 || response.status == 201){
            Swal.fire(
                'Item!',
                'Has been updated successfully',
                'success'
              )
        }
        return response.data
    }
)


const itemSlice = createSlice({
    name:'items',
    initialState:{items:[]},
    extraReducers:{
        [getItems.fulfilled]:(state , action)=>{
            state.items = action.payload
        },
        [getItems.pending]:(state , action)=>{
            // state.items = action.payload
        },
        [getItems.rejected]:(state , action)=>{
            // state.items = action.payload
        },

        //get single item 
        [getSingleItem.fulfilled]:(state , action)=>{
            state.items = action.payload
        },
        [getSingleItem.pending]:(state , action)=>{
            
        },
        [getSingleItem.rejected]:(state , action)=>{
            
        },

        //delete items 
        [deleteItem.fulfilled]:(state , action)=>{
            const {id} = action.payload;
            state.items = state.items.filter((item)=>item.id !== id);
            // console.log(state.items)
        },
        [deleteItem.pending]:(state , action)=>{

        },
        [deleteItem.rejected]:(state , action)=>{

        },
        //update items 
        [updateItem.fulfilled]:(state , action)=>{
            const {id} = action.payload;
            console.log(action)
            const item = state.items.find((item)=>item.id == id);
            item.Item_name = action.payload.Item_name;
            item.Item_description = action.payload.Item_description;

        },
        [updateItem.pending]:(state , action)=>{

        },
        [updateItem.rejected]:(state , action)=>{

        },
        
    }
})

export default itemSlice.reducer