import axios from "axios";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");



export const getFavItems = createAsyncThunk(
    'fav/getFavItems',
    async (id)=>{
        const response = await axios(`http://localhost:3005/getfav/${id}`)

        return response.data;
    }
)




const favSlice = createSlice({
    name:'fav',
    initialState:{favItems:[]},
    extraReducers:{
        [getFavItems.fulfilled]:(state, action)=>{
            state.favItems = action.payload
        },
        [getFavItems.pending]:(state, action)=>{
            
        },
        [getFavItems.rejected]:(state, action)=>{
            
        }
    }
})

export default favSlice.reducer;