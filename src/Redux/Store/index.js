import {createStore} from 'redux';
import itemsReducer from '../Reducers/itemsReducer';

const store = createStore(itemsReducer);

export default store;
