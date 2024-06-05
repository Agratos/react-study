const login = (id, password) => {
	return async (dispatch, getState) => {
		dispatch({ type: 'LOGIN_SUCCESS', payload: { id, password } });
	};
};
const logout = () => {
	return async (dispatch, getState) => {
		dispatch({ type: 'LOGOUT_SUCCESS' });
	};
};

export const authenicateAction = { login, logout };
