import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from './itemsSlice'
import storesReducer from './storesSlice'
import paramsReducer from './paramsSlice'


export const store = configureStore({
    reducer: {
        items: itemsReducer,
        stores: storesReducer,
        params: paramsReducer,
        
    }
})