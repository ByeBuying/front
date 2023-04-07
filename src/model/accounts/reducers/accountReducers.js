import { createSlice } from "@reduxjs/toolkit";
import AccountsCode from "../code/AccountsCode";
import LoginUser from "../object/LoginUser";
import MyInformation from "../object/MyInformation";

/**
 * History
 ** 2023-03-20: 임주형 - 로그인API 호출결과 저장(loginUserSlice)
 ** 2023-03-24: 임주형 - 내정보API 호출결과 저장(myInformationSlice)
 */

export const loginUserSlice = createSlice({
    name: 'accounts',
    initialState: { data: LoginUser, code: AccountsCode.NONE, reqCnt: 0 },
    reducers: {
        login: (state, action) => { // action type: "accounts/login"
            state.data = action.payload.data;
            state.code = action.payload.code;
            state.reqCnt += 1; // 로그인 버튼 눌렀을 때 상태를 변화시키기 위한 용도
        },
        initState: state => {
            state.data = LoginUser;
            state.code = AccountsCode.NONE;
            state.reqCnt = 0;
        }
    }
});

export const myInformationSlice = createSlice({
    name: 'accounts',
    initialState: { data: MyInformation, code: AccountsCode.NONE },
    reducers: {
        myInformation: (state, action) => {
            state.data = action.payload.data;
            state.code = action.payload.code;
        },
        initState: state => {
            state.data = MyInformation;
            state.code = AccountsCode.NONE;
        }
    }
});