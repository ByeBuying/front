import React from "react";
import styled from "styled-components";
import RegisterState from "./RegisterState";
import { assets } from "../../../model/lib/assets";
import { useLocation, useNavigate } from "react-router-dom";

function RegisterComplete() {
    const navigate = useNavigate();
    const location = useLocation();
    const name = location.state.name;

    return (
        <Contents>
            <RegisterState currentState={3}/>
            <img className="mt-10 w-16 h-16" src={assets.congratulationsIcon} alt="축하해요"/><br />
            <h1>회원가입이 완료되었습니다.</h1><br />
            <p><span className="font-semibold text-[#5223CB]">{name}</span>님의 회원가입을 축하합니다.</p>
            <p>로그인 후 Moin의 다양한 서비스를 이용하실 수 있습니다.</p>

            <BottomButtonDiv>
                <BottomButton onClick={() => navigate('/')}>홈으로</BottomButton>
                <BottomButton className="bg-[#222222] text-white"
                    onClick={() => navigate('/login')}>로그인
                </BottomButton>
            </BottomButtonDiv>
        </Contents>
    );
}

export default RegisterComplete;

const Contents = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 150px;
`

const BottomButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 100px;
`

const BottomButton = styled.button`
    width: 280px;
    height: 70px;
    border-width: 1px;
    border-radius: 0.25rem;
`
