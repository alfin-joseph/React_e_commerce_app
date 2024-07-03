import { createSlice } from "@reduxjs/toolkit";

const initialState = ''

const seacrchSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addSearch(state,action){
            state = action.payload
        },
    }
})
export const {addSearch} = seacrchSlice.actions
export default seacrchSlice.reducer;
