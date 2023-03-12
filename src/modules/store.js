import { configureStore } from "@reduxjs/toolkit";
import { loginUserSlice, sliceTest } from "./accounts/accountReducers";

const store = configureStore({
    reducer: {
        LoginUser: loginUserSlice.reducer,
        // ... //
    }
})
export default store;