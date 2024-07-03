import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        add(state,action){
            state.push(action.payload)
        },

        remove(state , action){
         return state.filter(item=>item.id !== action.payload)
        },

        searchCarts(state, action) {
            const searchTerm = action.payload.toLowerCase();
            state.data = state.data.filter(product =>
              product.title.toLowerCase().includes(searchTerm)
            );
          },

    }
})
export const {add, remove ,searchProducts} = cartSlice.actions
export default cartSlice.reducer;
