let initialStat = {
    num: 1,
    count: 0,
    id: '',
    password: ''
}

const reducer = (state = initialStat, action) => {
    switch(action.type){
        case "SETNUM":
            return { ...state, num: action.payload.num };
        case "INCREMENT":
            return { ...state, count: state.count + Number(state.num)};
        case "DECREMENT":
            return { ...state, count: state.count -  Number(state.num)};
        case "LOGIN":
            return { 
                ...state, 
                id: action.payload.id, 
                password: action.payload.password,
            }
        default:
            return { ...state }
    }
}

    

export default reducer;