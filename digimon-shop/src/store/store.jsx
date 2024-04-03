import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';

import rootReducer from './reducer';

import { configureStore } from '@reduxjs/toolkit';

//import authenticateReducer from './reducer/authenticateReducer';
//import productSlice from './reducer/productReducer';
import authenicateSlice from './slice/authenicateSlice';
import productSlice from './slice/productSlice';

// const store = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(thunk))
// );

const store = configureStore({
    reducer:{
        auth: authenicateSlice,
        product: productSlice
    }
})

export default store;