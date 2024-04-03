import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    list: [],
    detail: null,
    isLoading: false,
    errorMessage: '',
}

export const fetchProductAll = createAsyncThunk('product/fetchAll', async(searchQuery, thunkApi) => {
    try {
        const url = `https://my-json-server.typicode.com/Agratos/react-study/main/digimon-shop/products?q=${searchQuery}`
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
})

export const fetchProductDetail = createAsyncThunk('product/fetchProductDetail', async (id, thunkApi) => {
    try {
        const url = `https://my-json-server.typicode.com/Agratos/react-study/main/digimon-shop/products/?id=${id}`;
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
})

const productSlice = createSlice({
    name: 'product',
    initialState,
    // reducers: {
    //     getAllProducts(state, action){
    //         state.list = action.payload.data;
    //     },
    //     getDetailProduct(state, action){
    //         state.detail = action.payload.data;
    //     }
    // },
    extraReducers: (builder) => { // 비동기
        builder.addCase(fetchProductAll.pending, (state, action) => {
            state.isLoading = true
        })
        .addCase(fetchProductAll.fulfilled, (state, action) => { 
            state.isLoading = false;
            state.list = action.payload;
        })
        .addCase(fetchProductAll.rejected, (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.payload;
        })
        .addCase(fetchProductDetail.pending, (state, action) => {
            state.isLoading = true
        })
        .addCase(fetchProductDetail.fulfilled, (state, action) => {
            state.isLoading = false;
            state.detail = action.payload[0];
        })
        .addCase(fetchProductDetail.rejected, (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.payload;
        })
    }
})

export const productActions = productSlice.actions;
export default productSlice.reducer;

