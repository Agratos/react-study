import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	id: '',
	password: '',
	authenticate: false,
};

const authenicateSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		login(state, action) {
			state.authenticate = true;
			state.id = action.payload.id;
			state.password = action.payload.password;
		},
		logout(state, action) {
			return initialState;
		},
	},
});

export const authenicateActions = authenicateSlice.actions;

export default authenicateSlice.reducer;
