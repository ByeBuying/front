import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { loginUserSlice, myInformationSlice } from "../accounts/reducer/accountReducers";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session"
import { messageToastSlice } from "../common/messageToast/reducer/messageToastReducers";

const persistConfig = {
    key: "root",
    version: 1,
    storage: storageSession,
    whitelist: ["LoginUser", "MyInformation"] // whitelist만 sessionStorage에 저장
}

const reducers = persistReducer(persistConfig, combineReducers({
    LoginUser: loginUserSlice.reducer,
    MyInformation: myInformationSlice.reducer,
    MessageToast: messageToastSlice.reducer,
}));

const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})
export default store;

