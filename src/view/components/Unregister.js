import React, { useState } from 'react'
import styled from 'styled-components';

function Unregister() {
    const [password, setPassword] = useState("");
    
    const handleChange = (e) => {
        setPassword(e.target.value);
    }


    return (
        <Contents data-testid="unregister-component">
            <p className="text-xl font-semibold mb-10">회원 탈퇴</p>
            <p>회원 탈퇴를 신청하면 30일 이후 계정이 삭제되며, 쿠폰 및 적립금이 모두 소멸됩니다.</p>
            <p className="mb-5">또한, 계정이 삭제되면 복구할 수 없습니다.</p>
            <UserInfoDiv>
                <span className="text-[8px] mr-2">{"●"}</span><span className="w-[180px]">소멸되는 쿠폰 갯수</span>
                <span className="text-xl">{10}</span><span className=" ">개</span>
            </UserInfoDiv>
            <UserInfoDiv>
                <span className="text-[8px] mr-2">{"●"}</span><span className="w-[180px]">소멸되는 쿠폰 적립금</span>
                <span className="text-xl">{13570}</span><span>p</span>
            </UserInfoDiv>
            <p className="mt-10 mb-2">계정 비밀번호를 입력하고 '탈퇴하기'버튼을 누르면 회원 탈퇴가 신청됩니다.</p>
            <FormDiv>
                <input className="w-[30rem] h-10 border rounded-md border-[#D9D9D9] px-3"
                    type="password"
                    onChange={(e) => handleChange(e)}
                    placeholder="현재 비밀번호" />
                <button className="w-[6rem] bg-[#5223CB] border rounded-md">
                    <p className="text-white">탈퇴하기</p>
                </button>
            </FormDiv>
        </Contents>
    )
}

export default Unregister;

const Contents = styled.div`
    display: flex;
    flex-direction: column;
    border-width: 1px;
    border-radius: 10px;
    border-color: #d9d9d9;
    padding: 50px 50px;
`

const UserInfoDiv = styled.div`
    display: flex;
    align-items: center;
    width: 300px;
    margin-top: 10px;
`

const FormDiv = styled.form`
    display: flex;
    gap: 6px;
`