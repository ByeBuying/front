import { createSlice } from "@reduxjs/toolkit";
import LoginUser from "./object/LoginUser";

export const loginUserSlice = createSlice({
    name: 'accounts',
    initialState: { data: LoginUser, code: "", reqCnt: 0 },
    reducers: {
        login: (state, action) => { // action type: "accounts/login"
            state.data = action.payload.data;
            state.code = action.payload.code;
            state.reqCnt += 1;
        },

        // ... //
    }
});
export const { login } = loginUserSlice.actions;