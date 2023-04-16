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

/**
 * 
 * @returns 
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
        <div>
            <div className='flex justify-center'>
                {openMessageToast && (<MessageToast message={messageToast.message} />)}
            </div>
            <TextEvent pageLink={'/'} />
            <Header data-testid="header-component" />
            <section>
                <Outlet />
            </section>
            <Footer />
        </div>
    );
}
export default Layout;