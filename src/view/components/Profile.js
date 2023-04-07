import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getMemberGradeColorCode } from '../../api/common/getColorCode';
import MemberGradeBadge from './MemberGradeBadge';


function Profile() {
    const myInformation = useSelector(state => state.MyInformation.data);
    const grade = myInformation !== null ? myInformation.grade : "";
    const name = myInformation !== null ? myInformation.name : "";
    const email = myInformation !== null ? myInformation.email : "";

    return (
        <Contents>
            <MemberGradeBadge grade={grade} />
            <UserInfoDiv>
                <UserNameP>{name}</UserNameP>
                <UserEmailP>{email}</UserEmailP>
                <RegisterDateP>가입일: {"(TEST)2023.03.23"}</RegisterDateP>
            </UserInfoDiv>
        </Contents>
    )
}
export default Profile;

const Contents = styled.div`
    display: flex;
    gap: 55px;
`

const UserInfoDiv = styled.div`
    position: relative;
    width: 300px;
`

const UserNameP = styled.p`
    font-size: 1.2rem;
    font-weight: 200;
`

const UserEmailP = styled.p`
    font-size: 1.2rem;
    font-weight: 200;
`

const RegisterDateP = styled.p`
    position: absolute;
    bottom: 0;
    margin-bottom: 10px;
    font-size: 0.8rem;
    font-weight: 200;
`