import {combineReducers} from "@reduxjs/toolkit";
import authReducer from "./auth.reducers";


const reducers = combineReducers({
    authState: authReducer,
});

export default reducers;