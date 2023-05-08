
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { productsReducer } from "./productsReducer/products.reducer";
import {reducer as cartReducer} from './cartReducer/reducer'
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    productsReducer,
    cartReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
