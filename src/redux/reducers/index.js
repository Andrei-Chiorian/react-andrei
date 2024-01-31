import {combineReducers} from "@reduxjs/toolkit";
import authReducer from "./auth.reducer";
import shoppingCartReducer from "./shoppingCart.reducer";


const reducers = combineReducers({
    authState: authReducer,
    shoppingCartState: shoppingCartReducer
});

export default reducers;