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

export const sliceTest = createSlice({
    name: 'accounts',
    initialState: {},
    reducers: {
        login: (state, action) => { // action type: "accounts/login"
        },

        // ... //
    }
});


// const LOGIN_USER = createAction("accounts/login");

// export const loginUserReducer = createReducer(LoginUser, (builder) => {
//     builder
//         .addCase(LOGIN_USER, (state, action) => {
//             console.log("action.payload: ", action.payload);
//             state = action.payload;
//             console.log("state", state);
//         });
// })
// export default LOGIN_USER;