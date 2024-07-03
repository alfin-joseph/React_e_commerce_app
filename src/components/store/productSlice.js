import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    data:[],
    status:'idle'
}

const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
      fetchProducts(state ,action){
        state.data = action.payload
      },
      searchProducts(state, action) {
        const searchTerm = action.payload.toLowerCase();
        state.data = state.data.filter(product =>
          product.title.toLowerCase().includes(searchTerm)
        );
      },
    
    },
    extraReducers:(builder) => {
       builder
       .addCase(getProducts.pending ,(state ,action)=>{
        state.status = 'loading'
       })
       .addCase(getProducts.fulfilled,(state , action)=>{
        state.data = action.payload
        state.status = 'ldle'
       })
       .addCase(getProducts.rejected ,(state ,action)=>{
        state.status = 'error'
       })
      
    }
})
export const getProducts = createAsyncThunk('products/get', async ()=>{
    const data = await   fetch('https://fakestoreapi.com/products')
    const result = await data.json();
    return result
})
export const {fetchProducts ,searchProducts} = productSlice.actions
export default productSlice.reducer;

