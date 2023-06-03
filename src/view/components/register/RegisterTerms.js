import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import RegisterState from './RegisterState';
import TermsText from './TermsText';

function Register() {
    const [checkList, setCheckList] = useState({
        terms01: false,
        terms02: false,
        terms03: false
    });
    const buttonRef = useRef();
    
    useEffect(() => {
        handleValidation();
    }, [checkList]);

    const setAllCheck = (e) => {
        setCheckList({
            terms01: true,
            terms02: true,
            terms03: true
        });
    }

    const setChecked = (e) => {
        setCheckList({
            ...checkList,
            [e.target.id]: e.target.checked
        });
    }

    const handleValidation = () => {
        console.log(buttonRef.current);
        if(!checkList.terms01 || !checkList.terms02) {
            buttonRef.current.disabled=true;
        }
    }

    const handleNextButton = (e) => {
        if(!checkList.terms01 || !checkList.terms02) {
            alert("쇼핑몰 이용약관과 개인정보 수집항목 동의는 필수입니다.");
        }
    }

    return (
        <Contents>
            <KakaoRegisterButton>
                <p>카카오톡 1초 회원가입</p>
            </KakaoRegisterButton>
            <RegisterState />
            <div className="mb-8">
                <StyledLabel required={true}><input id="terms01" type="checkbox" onChange={(e) => setChecked(e)} checked={checkList.terms01}/> 쇼핑몰 이용약관 동의</StyledLabel>
                <TermsTextDiv>
                    <p className="m-5">
                        {TermsText.terms01}
                    </p>
                </TermsTextDiv>
            </div>

            <div className="mb-8">
                <StyledLabel required={true}><input id="terms02" type="checkbox" onChange={(e) => setChecked(e)} checked={checkList.terms02} /> 개인정보 수집항목 동의</StyledLabel>
                <TermsTextDiv>
                    <p className="m-5">
                        {TermsText.terms02}
                    </p>
                </TermsTextDiv>
            </div>

            <div className="mb-8">
                <StyledLabel required={false}><input id="terms03" type="checkbox" onChange={(e) => setChecked(e)} checked={checkList.terms03}/> 이벤트・광고 정보 수신</StyledLabel>
                <TermsTextDiv>
                    <p className="m-5">
                        {TermsText.terms03}
                    </p>
                </TermsTextDiv>
            </div>

            <StyledLabel><input id="checkAll" type="checkbox" onChange={(e) => setAllCheck(e)}/> 전체 동의하기</StyledLabel>
        
            <NextButton to="/registerForm" ref={buttonRef}>
                <p className="text-white">약관동의</p>
            </NextButton>
        </Contents>
    );
}
export default Register;

const Contents = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 140px 0;
`

const KakaoRegisterButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 450px;
    height: 56px;
    background-color: rgba(253 224 71 / 1);
`

const StyledLabel = styled.label`
    width: 450px;

    // text-lg
    font-size: 1.125rem;
    line-height: 1.75rem;
    
    ${props => props.required && `
        &:after {
            content: "[필수]";
            color: #5223CB;
        }
    `}

    ${props => props.required === false && `
        &:after {
            content: "[선택]";
            color: #5223CB;
        }
    `}
`
const TermsTextDiv = styled.div`
    width: 450px;
    height: 150px;
    background-color: #F9F9F9;
    border-width: 1px;
    overflow-y: auto;
`

const NextButton = styled(Link)`
    display: flex;
    width: 450px;
    height: 56px;
    margin: 25px 0;
    background-color: rgba(15 23 42 / 1);
    justify-content: center;
    align-items: center;
`