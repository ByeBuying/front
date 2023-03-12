import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { loginUserSlice } from "./accounts/accountReducers";

// redux-persist ---------------------------------------------------- //
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session"

const persistConfig = {
    key: "root",
    version: 1,
    storage: storageSession,
    whitelist: ["LoginUser"]
}


const rootReducer = combineReducers({
    LoginUser: loginUserSlice.reducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer);
// redux-persist ---------------------------------------------------- //

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    })
})
export default store;

