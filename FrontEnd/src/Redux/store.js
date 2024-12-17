import {createStore}  from 'redux';
import { combineReducers } from 'redux';
import {applyMiddleware}from 'redux'
import {thunk} from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { getProductsReducer,getProductDetailsReduser } from './reducers/ProductReducer.js';
import { cartReducer } from './reducers/cartReducer.js';

const reducer = combineReducers({
    getProducts:getProductsReducer,
    getProductDetails:getProductDetailsReduser,
    cart:cartReducer
})

const middleware =[thunk];

const store = createStore(
    reducer,composeWithDevTools(applyMiddleware(...middleware))
)
export default store;