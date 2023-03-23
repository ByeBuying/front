import React, { useState } from 'react';
import styled from 'styled-components';
import fetchAccountsNormal from '../../../api/fetch/fetchAccountsNormal';
import RegisterState from './RegisterState';

function RegisterForm() {
    const [inputs, setInputs] = useState({
        email: "",
        name: "",
        password: "",
        birthDay: ""
    });

    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const requestAccountsNormal = (e) => {
        e.preventDefault();
        fetchAccountsNormal(inputs);
    }

    return (
        <Contents>
            <RegisterState />
            <StyledForm>
                <InputDiv>
                    <InputLabelP>이름</InputLabelP>
                    <input type="text" className="w-[200px] border-b-2 border-black"
                        name="name"
                        onChange={handleChange}
                    />
                </InputDiv>
                <InputDiv>
                    <InputLabelP>이메일</InputLabelP>
                    <input type="text" className="w-[200px] border-b-2 border-black"
                        name="email"
                        onChange={handleChange}
                    />
                    <button type="button" className="top-0 w-[100px] h-[35px] ml-[10px] border rounded border-[#7F7F7F]">중복확인</button>
                </InputDiv>
                <InputDiv>
                    <InputLabelP>비밀번호</InputLabelP>
                    <input type="password" className="w-[200px] border-b-2 border-black"
                        name="password"
                        onChange={handleChange}
                    />
                </InputDiv>
                <InputDiv>
                    <InputLabelP>비밀번호 확인</InputLabelP>
                    <input type="password" className="w-[200px] border-b-2 border-black" />
                </InputDiv>
                <InputDiv>
                    <InputLabelP>생년월일</InputLabelP>
                    <input type="date" className="w-[200px] border-b-2 border-black"
                        name="birthDay"
                        onChange={handleChange}
                    />
                </InputDiv>
                <InputDiv>
                    <InputLabelP>휴대폰</InputLabelP>
                    <input type="text" className="w-[200px] border-b-2 border-black" />
                    <button type="button" className="top-0 w-[100px] h-[35px] ml-[10px] border rounded border-[#7F7F7F]">휴대폰 인증</button>
                </InputDiv>
                <InputDiv>
                    <InputLabelP>메일수신여부</InputLabelP>
                    <div className="flex justify-between w-[150px]">
                        <label><input type="radio" name="radio" checked /> 예</label>
                        <label><input type="radio" name="radio" /> 아니오</label>
                    </div>
                </InputDiv>
                <InputDiv>
                    <InputLabelP>추천인 이메일</InputLabelP>
                    <input type="text" className="w-[200px] border-b-2 border-black" />
                </InputDiv>
            </StyledForm>
            <BottomButtonDiv>
                <BottomButton>홈으로</BottomButton>
                <BottomButton className="bg-[#222222] text-white"
                    onClick={requestAccountsNormal}>
                    회원가입
                </BottomButton>
            </BottomButtonDiv>
        </Contents>
    )
}
export default RegisterForm;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 140px 0;
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 800px;
    border-width: 1px;
    padding: 50px 200px;
`

const InputDiv = styled.div`
    display: flex;
    align-items: center;
    width: 450px;
    height: 50px;
    margin-bottom: 20px;
`

const InputLabelP = styled.p`
    width: 120px;
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