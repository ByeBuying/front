import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import fetchAccount from "../../../api/fetch/fetchAccount";
import { useDispatch } from 'react-redux';
import { messageToastSlice } from '../../../model/common/messageToast/reducer/messageToastReducers';

/**
 * History
 ** 2023-04-14: 임주형 - 최초 생성
 */

function Inactivate() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            // TODO: 사용자가 직접 URL을 바꿔 컴포넌트를 이동했을 때는 Unmount 되지 않는다.
            console.log("unmount");
            fetchAccount.logout();
        }
    }, []);

    const active = () => {
        fetchAccount.updateActivated(true).then(response => {
            navigate("/login");
            dispatch(messageToastSlice.actions.show("계정 활성화 완료!"));
        });
    }

    return (
        <Contents>
            <TitleDiv>
                <p className="text-xl font-semibold">회원탈퇴를 신청한 계정입니다.</p>
            </TitleDiv>
            <SubtitleDiv>
                <p className="text-[#555555]">회원탈퇴를 취소하고 다시 활성화할 수 있습니다.</p>
            </SubtitleDiv>
            <BottomButtonDiv>
                <BottomButton onClick={() => navigate('/')}>홈으로</BottomButton>
                <BottomButton className="bg-[#5223CB] text-white"
                    onClick={() => active()}
                >
                    활성화
                </BottomButton>
            </BottomButtonDiv>
        </Contents>
    );
}

export default Inactivate;

const Contents = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 200px 0;
`
const TitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
`

const SubtitleDiv = styled.div`
    margin: 10px 0;
`

const BottomButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 150px;
`

const BottomButton = styled.button`
    width: 200px;
    height: 70px;
    border-width: 1px;
    border-radius: 0.25rem;
`