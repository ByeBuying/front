import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { loginUserSlice, myInformationSlice } from "../accounts/accountReducers";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session"

const persistConfig = {
    key: "root",
    version: 1,
    storage: storageSession,
    whitelist: ["LoginUser"] // whitelist만 sessionStorage에 저장
}

const reducers = persistReducer(persistConfig, combineReducers({
    LoginUser: loginUserSlice.reducer,
    MyInformation: myInformationSlice.reducer,
}));

const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})
export default store;

