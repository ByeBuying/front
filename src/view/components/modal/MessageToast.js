import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components';

/**
 ** History
 * 2023-04-07: 임주형 - 최초생성
 * @param {string} message 내용
 */
function MessageToast({ message }) {
    const [closeToast, setCloseToast] = useState(slideUp);
    
    useEffect(() => {
        setTimeout(() => {
            console.log("closetoast");
            setCloseToast(slideDown);
        }, 3000);
    }, []);

    return (
        <Contents closeToast={closeToast}>
            <MessageSpan>message</MessageSpan>
        </Contents>
    );
}
export default MessageToast;

const slideUp = keyframes`
    from { transform: translateY(100%); }
    to { transform: translateY(0%); }
`;

const slideDown = keyframes`
    from { transform: translateY(0%) }
    to { transform: translateY(100%) }
`

const Contents = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 100px;
    left: 50%;
    z-index: 1000;
    width: 100px;
    height: 50px;
    background-color: #5223CB;
    animation: ${props => props.closeToast} 1s forwards;
`

const MessageSpan = styled.span`
    font-size: larger;
    color: white;
`