import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import fetchAccount from '../../../api/fetch/fetchAccount';
import { useDispatch } from 'react-redux';
import { loginUserSlice, myInformationSlice } from '../../../model/accounts/reducer/accountReducers';

function UnregisterComplete() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        fetchAccount.logout().then(() => {
            dispatch(loginUserSlice.actions.initState());
            dispatch(myInformationSlice.actions.initState());
            navigate("/");
        });
    }

    return (
        <Contents>
            <TitleDiv>
                <h1 className="text-xl font-semibold mb-6">회원탈퇴가 완료되었습니다.</h1>
                <p>이용해주셔서 감사합니다.</p>
            </TitleDiv>
            <ButtonDiv>
                <button className="bg-[#5223CB] text-white w-24 h-10 rounded-md"
                    onClick={() => handleClick()}
                >홈으로</button>
            </ButtonDiv>
        </Contents>
    );
}

export default UnregisterComplete;

const Contents = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 1000px;
`

const TitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 66%;
`

const ButtonDiv = styled.div`
    height: 33%;
`