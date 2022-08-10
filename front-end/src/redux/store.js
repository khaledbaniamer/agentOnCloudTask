import { configureStore } from '@reduxjs/toolkit';
import user from './userSlice'
import items from './itemSlice'
import comments from './commentSlice'
import fav from './favSlice'


export const  store = configureStore({
    reducer:{
        user,
        items,
        comments,
        fav,
    }
});