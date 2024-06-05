const initialState = {
	id: '',
	password: '',
	authenticate: false,
};

const authenticateReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'LOGIN_SUCCESS':
			return { ...state, ...payload.data, authenticate: true };
		case 'LOGOUT_SUCCESS':
			return { ...initialState };
		default:
			return { ...state };
	}
};

export default authenticateReducer;
