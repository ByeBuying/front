import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import AppLogo from '../logo.svg'

function Register() {
    const arrayRef = useRef([]);

    const expandContents = useCallback(node => {

    });

    return (
        <Contents>
            <KakaoRegisterButton>
                <p>카카오톡 1초 회원가입</p>
            </KakaoRegisterButton>

            <ProcessDiv>
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
            </ProcessDiv>
            <TermsDetails text={"쇼핑몰 이용약관"}>
                <TermsSummary>
                    <label><input type="checkbox"/> 동의합니다.</label>
                </TermsSummary>
                <p className="mt-5">
                    긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장
                    긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장
                    긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장
                    긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장
                    긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장
                </p>
            </TermsDetails>
            <TermsDetails text={"개인정보 수집항목"}>
                <TermsSummary>
                    <label><input type="checkbox"/> 동의합니다.</label>
                </TermsSummary>
                <p className="mt-5">
                    긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장
                    긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장
                    긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장
                    긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장
                    긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장
                </p>
            </TermsDetails>
            <TermsDetails text={"개인정보 수집목적"}>
                <TermsSummary>
                    <label><input type="checkbox"/> 동의합니다.</label>
                </TermsSummary>
                <p className="mt-5">
                    긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장
                    긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장
                    긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장
                    긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장
                    긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장
                </p>
            </TermsDetails>
            <TermsDetails text={"개인정보 보유 및 이용기간"}>
                <TermsSummary>
                    <label><input type="checkbox"/> 동의합니다.</label>
                </TermsSummary>
                <p className="mt-5">
                    긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장
                    긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장
                    긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장
                    긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장
                    긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장
                </p>
            </TermsDetails>
            <TermsDetails text={"개인정보 제3자 제공동의"}>
                <TermsSummary>
                    <label><input type="checkbox"/> 동의합니다.</label>
                </TermsSummary>
                <p className="mt-5">
                    긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장
                    긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장
                    긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장
                    긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장
                    긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장 긴 문장
                </p>
            </TermsDetails>
            <NextButton>
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

const ProcessDiv = styled.div`
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


const TermsSummary = styled.summary`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
`

const TermsDetails = styled.details`
    display: flex;
    width: 450px;
    margin-bottom: 10px;
    padding: 15px 10px;
    background-color: #F9F9F9;
    border-width: 1px;

    ${TermsSummary} {
        &:before {
            content: "▶ ${props => props.text}";
        }
    }

    &[open] > ${TermsSummary} {
        &:before {
            content: "▼ ${props => props.text}";
        }
    }
`

const NextButton = styled.button`
    display: flex;
    width: 450px;
    height: 56px;
    margin: 50px 0;
    background-color: rgba(15 23 42 / 1);
    justify-content: center;
    align-items: center;
`