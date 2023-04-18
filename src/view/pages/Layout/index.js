import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TextEvent from '../../components/TextEvent';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import MessageToastState from '../../../model/common/messageToast/code/MessageToastState';
import MessageToast from '../../components/modal/MessageToast';
import fetchMyInformation from '../../../api/fetch/fetchMyInformation';
import useActivation from '../../../api/hooks/useActivation';
import styled from 'styled-components';

/**
 * History
 ** 2023-01-26: 임주형 - 최초생성
 ** 2023-04-16: 임주형 - App.js와 분리
 * 설명
 ** Header, Footer를 포함하고 있는 최상위 페이지
 */

function Layout() {
    const [openMessageToast, setOpenMessageToast] = useState(false);
    const messageToast = useSelector(state => state.MessageToast);
    const loginUser = useSelector(state => state.LoginUser);
    const dispatch = useDispatch();
    const [isActivated] = useActivation();

    // 로그인 상태 확인
    useEffect(() => {
        if (isActivated === false) {

        }

        if (loginUser.data !== null) {
            dispatch(fetchMyInformation(loginUser.data));
        }
    }, [isActivated, loginUser]);

    // MessageToast
    useEffect(() => {
        if (messageToast.code === MessageToastState.SHOW) setOpenMessageToast(true);
        else if (messageToast.code === MessageToastState.CLOSE) setOpenMessageToast(false);
    }, [messageToast]);

    return (
        <Contents>
            <MessageToastDiv>
                {openMessageToast && (<MessageToast message={messageToast.message} />)}
            </MessageToastDiv>
            <TextEvent pageLink={'/'} />
            <Header />
            <section>
                <Outlet />
            </section>
            <Footer />
        </Contents>
    )
}
export default Layout;

const Contents = styled.div``

const MessageToastDiv = styled.div`
    display: flex;
    justify-content: center;
`