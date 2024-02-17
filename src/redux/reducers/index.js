import {combineReducers} from "@reduxjs/toolkit";
import authReducer from "./auth.reducer";
import shoppingCartReducer from "./shoppingCart.reducer";
import registerReducer from "./register.reducer";

const reducers = combineReducers({
    authState: authReducer,
    shoppingCartState: shoppingCartReducer,
    registerState: registerReducer
});

export default reducers;