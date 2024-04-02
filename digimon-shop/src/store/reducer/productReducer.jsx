const initialState = {
    list: [],
    detail: null
}

const productReducer = (state=initialState, action) => {
    const { type, payload } = action
    switch(type){
        case 'GET_PRODUCT_SUCCESS':
            return { ...state, list: payload.data};
        case 'GET_PRODUCT_DETAIL_SUCCESS':
            return { ...state, detail: payload.data  }
        default :
            return { ...state }
    }
}

export default productReducer;