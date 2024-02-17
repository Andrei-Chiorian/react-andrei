import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import {persistReducer} from "redux-persist";
import reducers from "../reducers";
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../saga";



const storeConfigure = ({initialState = {}, cache = false}) => {
    const persistConfig = {
        key: 'root',
        storage: storage,
    }
    const sagaMiddleware = createSagaMiddleware()

    const persistedReducers = persistReducer(persistConfig, reducers);

    let store = createStore (
        persistedReducers,
        initialState,
        applyMiddleware(sagaMiddleware),
    )

    sagaMiddleware.run(rootSaga);

    return store;

}

export default storeConfigure;