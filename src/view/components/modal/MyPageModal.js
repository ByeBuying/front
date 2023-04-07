import React from 'react'
import styled from 'styled-components';

/**
 * History
 ** 2023-04-04: 임주형 - 최초생성
 * @param {number} parentHeight 부모엘리먼트 높이
 * @returns {MyPageModal} Component
 */

function MyPageModal({ parentHeight }) {
    return (
        <Contents parentHeight={parentHeight}>
            <TopContentsDiv>

            </TopContentsDiv>
            <MyPageMenuDiv>

            </MyPageMenuDiv>
            <BottomContentsDiv>

            </BottomContentsDiv>
        </Contents>
    )
}

export default MyPageModal;

const Contents = styled.div`
    position: absolute;
    top: ${props => props.parentHeight} + 'px';
    left: 0;
    z-index: 1000;
    width: 300px;
    height: 600px;
    background: black;
`

const TopContentsDiv = styled.div`

`


const MyPageMenuDiv = styled.div`

`

const BottomContentsDiv = styled.div`

`