import {createStore} from 'redux';
import counterReducer from '../Reducers/CounterReducer';
const store = createStore(counterReducer);

export default store;
