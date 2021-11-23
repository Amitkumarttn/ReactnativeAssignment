import {combineReducers} from 'redux';
import dataReducer from './DataReducer';

const combinedReducers = combineReducers({
  dataVal: dataReducer,
});
export default combinedReducers;
