import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import fetchAccount from "../../../api/fetch/fetchAccount"

/**
 * History
 ** 2023-04-14: 임주형 - 최초 생성
 */

function Inactivate() {
    const navigate = useNavigate();

    useEffect(() => {
        return () => {
            console.log("unmount");
            fetchAccount.logout();
        }
    }, []);

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
                <BottomButton className="bg-[#5223CB] text-white">
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