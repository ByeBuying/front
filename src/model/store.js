import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { loginUserSlice } from "./accounts/accountReducers";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session"

const persistConfig = {
    key: "root",
    version: 1,
    storage: storageSession,
    whitelist: ["LoginUser"] // whitelist만 session 사용
}

const reducers = persistReducer(persistConfig, combineReducers({
    LoginUser: loginUserSlice.reducer,
}));

const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})
export default store;

