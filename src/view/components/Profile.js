import React from 'react'
import styled from 'styled-components';

function Profile() {
    const getColorCode = (memberLevel) => {
        switch (memberLevel) {
            case "LV1":
                return "#C89850";
            case "LV2":
                return "#888888";
            case "LV3":
                return "#EBB700";
            case "LV4":
                return "#2FEED7";
            case "LV5":
                return "#FF0000";
            default:
                return "#000000";
        }
    }

    return (
        <Contents>
            <MemberLevelDiv colorCode={getColorCode("LV1")}>
                <MemberLevelSpan>{"LV1"}</MemberLevelSpan>
            </MemberLevelDiv>
            <UserInfoDiv>
                <UserNameP>{"임주형"}</UserNameP>
                <UserEmailP>{"abc123@gmail.com"}</UserEmailP>
                <RegisterDate>가입일: {"2023.03.23"}</RegisterDate>
            </UserInfoDiv>
        </Contents>
    )
}

export default Profile;

const Contents = styled.div`
    display: flex;
    gap: 55px;
`

const MemberLevelDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    border-width: 4px;
    border-color: ${props => props.colorCode};
`

const MemberLevelSpan = styled.span`
    font-size: 1.35rem;
    font-weight: 400;
`

const UserInfoDiv = styled.div`
    position: relative;
`

const UserNameP = styled.p`
    font-size: 1.2rem;
    font-weight: 200;
`

const UserEmailP = styled.p`
    font-size: 1.2rem;
    font-weight: 200;
`

const RegisterDate = styled.p`
    position: absolute;
    bottom: 0;
    margin-bottom: 10px;
    font-size: 0.8rem;
    font-weight: 200;
`