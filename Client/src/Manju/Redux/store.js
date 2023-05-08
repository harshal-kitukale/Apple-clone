import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { productsReducer } from "./Products/products.reducer";
import thunk from "redux-thunk";



//
const rootReducer = combineReducers({

  productsReducer,

});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
