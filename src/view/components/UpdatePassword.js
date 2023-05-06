import React, { useState } from 'react';
import styled from 'styled-components';
import fetchAccount from '../../api/fetch/fetchAccount';
import AccountsCode from '../../model/accounts/code/AccountsCode';

function UpdatePassword() {
    const [inputs, setInputs] = useState({
        presentPassword: "",
        changePassword: "",
        confirmPassword: "",
    });



    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    }

    const onChangePassword = (e) => {
        e.preventDefault();
        
        if(inputs.changePassword === inputs.confirmPassword) {
            fetchAccount.updatePassword(inputs.changePassword, inputs.presentPassword)
            .then(response => {
                // Error: 현재 비밀번호가 일치하지 않아도 비밀번호 변경 가능


                if(response.data.code === AccountsCode.NOT_AUTHORIZED) {
                    console.log("세션 정보 없음");
                }
                else if(response.data.code === AccountsCode.NOT_MATCHES_NEW_PASSWORD) {
                    console.log("현재 비밀번호가 일치하지 않습니다.");
                }
                else if(response.data.code === AccountsCode.INVALID_INPUT_VALUE) {
                    console.log("6자리 이상의 비밀번호를 입력해주세요.");
                }
            });
        }
        else {
            console.log("변경 비밀번호와 확인 비밀번호가 일치하지 않습니다.");
        }
    }

    return (
        <Contents>
            <div className="">
                <h1 className="text-xl font-semibold mb-10">비밀번호 변경</h1>
            </div>
            <FormDiv>
                <StyledInput
                    name="presentPassword"
                    type="password"
                    placeholder="현재 비밀번호"
                    onChange={(e) => handleChange(e)}
                />
                <StyledInput
                    name="changePassword"
                    type="password"
                    placeholder="변경 비밀번호"
                    onChange={(e) => handleChange(e)}
                />
                <div className="flex gap-[6px]">
                    <StyledInput
                        name="confirmPassword"
                        type="password"
                        placeholder="비밀번호 확인"
                        onChange={(e) => handleChange(e)}
                    />
                    <button className="w-[6rem] bg-[#5223CB] border rounded-md"
                        onClick={(e) => onChangePassword(e)}
                    >
                        <p className="text-white">변경하기</p>
                    </button>
                </div>
            </FormDiv>
        </Contents>
    )
}

export default UpdatePassword;

const Contents = styled.div`
    display: flex;
    flex-direction: column;
    border-width: 1px;
    border-radius: 10px;
    border-color: #d9d9d9;
    padding: 50px 50px;
`

const FormDiv = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const StyledInput = styled.input`
    width: 30rem;
    height: 2.5rem;
    border-width: 1px;
    border-radius: 0.375rem;
    border-color: rgba(217 217 217 / 1);
    padding: 0 0.75rem;
`