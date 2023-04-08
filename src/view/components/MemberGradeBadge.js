import React from 'react'
import styled from 'styled-components';
import { getMemberGradeColorCode } from '../../module/ColorCode';

/**
 * History
 ** 2023-03-25: 임주형 - 최초생성
 * @param {string} grade 멤버레벨 
 */

function MemberGradeBadge({ grade }) {
    return (
        <Contents
            colorCode={getMemberGradeColorCode(grade)}>
            <MemberLevelSpan>{grade}</MemberLevelSpan>
        </Contents>
    )
}

export default MemberGradeBadge;

const Contents = styled.div`
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