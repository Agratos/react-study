import { createStore } from 'redux';
import reducer from './reducer/redcer';

const store = createStore(reducer);

export default store;