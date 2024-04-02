const getProduct = (searchQuery) => {
    return async(dispatch, getState) => {
        const url = `https://my-json-server.typicode.com/Agratos/react-study/main/digimon-shop/products?q=${searchQuery}`
        const response = await fetch(url);
        const data = await response.json();
        dispatch({ type: 'GET_PRODUCT_SUCCESS', payload: { data }})
    }
}

const getProductDetail = (id) => {
    return async(dispatch, getState) => {
        const url = `https://my-json-server.typicode.com/Agratos/react-study/main/digimon-shop/products/?id=${id}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data[0])
        dispatch({ type: 'GET_PRODUCT_DETAIL_SUCCESS', payload: { data: data[0] }})
    }
}

export const productAction = { getProduct, getProductDetail }