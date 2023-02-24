import React from 'react';
import styled from 'styled-components';
import AppLogo from '../../logo.svg'

function RegisterState() {
    return (
        <Contents>
            <ImageDiv>
                <img src={AppLogo} />
                <p>약관동의</p>
            </ImageDiv>
            <img className="w-[22px]" src={AppLogo} />
            <ImageDiv>
                <img src={AppLogo} />
                <p>회원정보 입력</p>
            </ImageDiv>
            <img className="w-[22px]" src={AppLogo} />
            <ImageDiv>
                <img src={AppLogo} />
                <p>회원정보 완료</p>
            </ImageDiv>
        </Contents>
    )
}

export default RegisterState;

const Contents = styled.div`
    display: flex;
    width: 450px;
    height: 100px;
    object-fit: contain;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    font-size: 14px;
    margin: 60px 0;
`

const ImageDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
`