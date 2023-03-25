import styled from "styled-components";
import React from 'react'
import DialogType from "../../model/common/DialogType";

/**
 * History
 ** 2023-03-23: 임주형 - 최초생성
 * @callback callbackConfirm
 * @callback callbackCancel
 * @param {string} title 제목
 * @param {string} content 내용
 * @param {DialogType} type 다이얼로그 종류(/model/common/DialogType.js)
 * @param {callbackConfirm} confirm 확인 버튼 콜백
 * @param {callbackCancel} cancel 취소 버튼 콜백 
 * @returns {MessageDialog} Component
 */

function MessageDialog({ title, content, type, confirm, cancel }) {
    return (
        <Contents>
            <MessageBoxDiv>
                <TitleP>{title}</TitleP>
                <ContentP>{content}</ContentP>
                <ButtonDiv>
                    <ConfirmButton onClick={(e) => confirm(e)}>확인</ConfirmButton>
                    {type === DialogType.CONFIRM_AND_CANCEL && <CancelButton onClick={(e) => cancel(e)}>취소</CancelButton>}
                </ButtonDiv>
            </MessageBoxDiv>
        </Contents>
    );
}

export default MessageDialog;

const Contents = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: rgba(0 0 0 / 0.5);
`

const MessageBoxDiv = styled.div`
    width: 500px;
    height: 300px;
    padding: 40px 40px;
    border-radius: 15px;
    background-color: white;
`

const TitleP = styled.p`
    font-size: x-large;
    margin-bottom: 20px;
`
const ContentP = styled.p`
    margin-bottom: 80px;
`

const ButtonDiv = styled.div`
    display: flex;
    justify-content: right;
    gap: 15px;
`

const ConfirmButton = styled.button`
    width: 100px;
    height: 50px;
    background-color: #5223CB;
    color: white;
    border-radius: 7px;
`

const CancelButton = styled.button`
    width: 100px;
    height: 50px;
    background-color: white;
    color: black;
    border-width: 1px;
    border-radius: 7px;
`