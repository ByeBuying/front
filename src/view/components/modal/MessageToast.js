import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components';
import { messageToastSlice } from '../../../model/common/messageToast/reducer/messageToastReducers';
import { useDispatch } from 'react-redux';

/**
 ** History
 * 2023-04-07: 임주형 - 최초생성
 * @param {string} message 내용
 */
function MessageToast({ message }) {
    const [animation, setAnimation] = useState(slideUp);
    const [isSlideDownAnimEnd, setIsSlideDownAnimEnd] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            setAnimation(slideDown);
            setIsSlideDownAnimEnd(true);
        }, 3000);
    }, []);

    return (
        <Contents
            animation={animation}
            onAnimationEnd={() => {
                if (isSlideDownAnimEnd) dispatch(messageToastSlice.actions.close());
            }}
        >
            <MessageSpan>{message}</MessageSpan>
        </Contents>
    );
}
export default MessageToast;

const slideUp = keyframes`
    from { 
        opacity: 0;
        transform: translateY(100%); 
    }
    to { 
        opacity: 1;
        transform: translateY(0%); 
    }
`;

const slideDown = keyframes`
    from {
        opacity: 1; 
        transform: translateY(0%) 
    }
    to {
        opacity: 0;
        transform: translateY(100%) 
    }
`

const Contents = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 80px;
    z-index: 1000;
    width: 200px;
    height: 40px;
    border-radius: 12px;
    font-size: small;
    background-color: #5223CB;
    animation: ${props => props.animation} 1s forwards;
    box-shadow: 1px 3px 4px rgba(0 0 0 / 0.5);
`

const MessageSpan = styled.span`
    font-size: larger;
    color: white;
`