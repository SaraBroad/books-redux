import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import bookReducer from './bookReducer'
import * as actionTypes from '../actions';

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    bookReducer
    // add reducer
    // rest of reducers
})

export default createRootReducer