import React from 'react';
import styled from 'styled-components';
import RegisterState from './RegisterState';

function RegisterForm() {
    return (
        <Contents>
            <RegisterState />
            <FormDiv>
                <form>
                    <InputDiv>
                        <p className="w-[120px]">이름</p>
                        <input type="text" className="w-[200px] border-b-2 border-black" />
                    </InputDiv>
                    <InputDiv>
                        <p className="w-[120px]">아이디</p>
                        <input type="text" className="w-[200px] border-b-2 border-black" />
                        <button type="button" className="top-0 w-[100px] h-[35px] ml-[10px] border rounded border-[#7F7F7F]">중복확인</button>
                    </InputDiv>
                    <InputDiv>
                        <p className="w-[120px]">비밀번호</p>
                        <input type="password" className="w-[200px] border-b-2 border-black" />
                    </InputDiv>
                    <InputDiv>
                        <p className="w-[120px]">비밀번호 확인</p>
                        <input type="password" className="w-[200px] border-b-2 border-black" />
                    </InputDiv>
                    <InputDiv>
                        <p className="w-[120px]">생년월일</p>
                        <input type="date" className="w-[200px] border-b-2 border-black" />
                    </InputDiv>
                    <InputDiv>
                        <p className="w-[120px]">휴대폰</p>
                        <input type="text" className="w-[200px] border-b-2 border-black" />
                        <button type="button" className="top-0 w-[100px] h-[35px] ml-[10px] border rounded border-[#7F7F7F]">휴대폰 인증</button>
                    </InputDiv>
                    <InputDiv>
                        <p className="w-[120px]">메일수신여부</p>
                        <div className="flex justify-between w-[150px]">
                            <label><input type="radio" name="radio" checked /> 예</label>
                            <label><input type="radio" name="radio" /> 아니오</label>
                        </div>
                    </InputDiv>
                    <InputDiv>
                        <p className="w-[120px]">이메일</p>
                        <input type="text" className="w-[200px] border-b-2 border-black" />
                    </InputDiv>
                    <InputDiv>
                        <p className="w-[120px]">추천인 아이디</p>
                        <input type="text" className="w-[200px] border-b-2 border-black" />
                    </InputDiv>
                </form>
            </FormDiv>
            <BottomButtonDiv>
                <BottomButton>홈으로</BottomButton>
                <BottomButton className="bg-[#222222] text-white">회원가입</BottomButton>
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

const FormDiv = styled.div`
    display: flex;
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