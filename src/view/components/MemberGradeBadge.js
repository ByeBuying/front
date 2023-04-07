import React from 'react'
import styled from 'styled-components';
import { getMemberGradeColorCode } from '../../api/common/getColorCode';

function MemberGradeBadge({ grade }) {
    return (
        <MemberGradeBadgeDiv colorCode={getMemberGradeColorCode(grade)}>
            <MemberLevelSpan>{grade}</MemberLevelSpan>
        </MemberGradeBadgeDiv>
    )
}

export default MemberGradeBadge;

const MemberGradeBadgeDiv = styled.div`
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