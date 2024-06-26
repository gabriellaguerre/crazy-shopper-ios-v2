import { createSlice } from "@reduxjs/toolkit";

const initialState = {storeParams: null}

const paramsSlice = createSlice({
    name: 'params',
    initialState,
    reducers: {
        setStoreParams(state, action) {
                state.storeParams = action.payload
        },
        resetStoreParams(state, action){
               state.storeParams = null;

        },
      
        },
})



export const { setStoreParams, resetStoreParams } = paramsSlice.actions

export default paramsSlice.reducer;