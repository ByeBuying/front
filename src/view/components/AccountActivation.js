import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

/**
 * History
 ** 2023-04-14: 임주형 - 최초 생성
 */

function AccountActivation() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        present_password: "",
        change_password: ""
    })

    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
        console.log(inputs);
    }

    return (
        <Contents>
            <TitleDiv>
                <p className="text-xl">잠김 처리된 계정입니다.</p>
                <p className="text-xl">{"(사유)"}</p>
            </TitleDiv>
            <SubtitleDiv>
                <p className="text-[#555555]">계정 활성화를 위해 비밀번호를 초기화 해주세요.</p>
            </SubtitleDiv>
            <StyledForm>
                <InputDiv>
                    <p>현재 비밀번호</p>
                    <StyledInput type="password" name="present_password" onChange={handleChange}/>
                </InputDiv>
                <InputDiv>
                    <p>변경 비밀번호</p>
                    <StyledInput type="password" name="change_password" onChange={handleChange}/>
                </InputDiv>
                <InputDiv>
                    <p>비밀번호 확인</p>
                    <StyledInput type="password" onChange={handleChange}/>
                </InputDiv>
            </StyledForm>
            <BottomButtonDiv>
                <BottomButton onClick={() => navigate('/')}>홈으로</BottomButton>
                <BottomButton className="bg-[#5223CB] text-white">
                    비밀번호 변경
                </BottomButton>
            </BottomButtonDiv>
        </Contents>
    );
}

export default AccountActivation;

const Contents = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 70px 0;
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

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 60px 0;
`

const InputDiv = styled.div`
    display: flex;
    gap: 2.5rem;
    margin: 10px 0;
`

const StyledInput = styled.input`
    width: 200px;
    border-bottom-width: 2px;
    border-bottom-color: rgba(0 0 0 / 1);
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