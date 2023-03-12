import { createSlice } from "@reduxjs/toolkit";
import LoginUser from "./LoginUser";

export const loginUserSlice = createSlice({
    name: 'accounts',
    initialState: { data: LoginUser },
    reducers: {
        login: (state, action) => { // action type: "accounts/login"
            state.data = action.payload;
        },

        // ... //
    },
    extraReducers: (builder) => {

    }
});
export const { login } = loginUserSlice.actions;