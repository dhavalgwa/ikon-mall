import fetchData from './user';
import shop from './shop';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    fetchData,
    shop,
})

export default rootReducer;