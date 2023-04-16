import { createSlice } from '@reduxjs/toolkit';
import MessageToastState from '../code/MessageToastState';

/**
 * Histoty
 ** 2023-04-07: 임주형 - MessageToast 호출 구현
 */
export const messageToastSlice = createSlice({
    name: 'messageToast',
    initialState: { message: "", code: MessageToastState.CLOSE },
    reducers: {
        show: (state, action) => {
            state.message = action.payload;
            state.code = MessageToastState.SHOW;
        },
        close: (state, action) => {
            state.message = "";
            state.code = MessageToastState.CLOSE;
        }
    }
});