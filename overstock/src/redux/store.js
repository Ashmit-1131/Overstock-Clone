import {legacy_createStore,combineReducers,compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {productReducer} from './Products/products.reducer';
import {CartReducer} from './Cart/cart.reducer';

const rootReducer = combineReducers({
    productManager:productReducer,
    cartManager:CartReducer
});

const compser = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer,compser(applyMiddleware(thunk)));

