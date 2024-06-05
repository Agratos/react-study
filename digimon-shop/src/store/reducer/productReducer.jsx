import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	list: [],
	detail: null,
};

const productReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'GET_PRODUCT_SUCCESS':
			return { ...state, list: payload.data };
		case 'GET_PRODUCT_DETAIL_SUCCESS':
			return { ...state, detail: payload.data };
		default:
			return { ...state };
	}
};
export default productReducer;

// const productSlice = createSlice({
//     name: 'product',
//     initialState,
//     reducers: {
//         getAllProducts(state, action){
//             state.list = action.payload.data;
//         },
//         getDetailProduct(state, action){
//             state.detail = action.payload.data;
//         }
//     }
// })

// export const productActions = productSlice.actions;
// export default productSlice.reducer;
