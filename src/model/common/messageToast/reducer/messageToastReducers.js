import { createSlice } from '@reduxjs/toolkit';

/**
 * Histoty
 ** 2023-04-07: 임주형 - MessageToast 호출 구현
 */
export const messageToastSlice = createSlice({
    name: 'messageToast',
    initialState: { message: "", reqCnt: 0 },
    reducers: {
        show: (state, action) => {
            state.message = action.payload;
            state.reqCnt += 1;
        }
    }
});