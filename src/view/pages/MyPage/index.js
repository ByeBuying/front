import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import fetchMyInformation from '../../../api/fetch/fetchMyInformation';
import Profile from '../../components/Profile';
import AccountsCode from '../../../model/accounts/code/AccountsCode';
import { loginUserSlice, myInformationSlice } from '../../../model/accounts/reducer/accountReducers';
import { useNavigate } from 'react-router-dom';

function MyPage() {
    /*
        쿠키(세션)가 HttpOnly로 설정된 경우: 클라이언트에서 읽기 불가능
        세션 정보를 포함해야되는 요청(my-information 등)에서 ATE-003(NOT_AUTHORIZED)
        로 응답이 오면 로그인 정보 관련 State 초기화
    */

    const loginUser = useSelector(state => state.LoginUser.data);
    const myInformation = useSelector(state => state.MyInformation);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const useDidMount = () => { // ComponentDidMount
        useEffect(() => {
            dispatch(fetchMyInformation(loginUser));
        }, []);
    }
    useDidMount();

    useEffect(() => {
        // No Session - NOT_AUTHORIZED(ATE-003)
        if(myInformation.code === AccountsCode.NOT_AUTHORIZED) {
            // Delete LoginUser, MyInformation state
            dispatch(loginUserSlice.actions.initState());
            dispatch(myInformationSlice.actions.initState());
            navigate('/login');
        }

    }, [myInformation]);
    
    return (
        <Contents>
            <MenuDiv>
            </MenuDiv>
            <ContentDiv>
                <Profile />
            </ContentDiv>

        </Contents>
    )
}
export default MyPage;

const Contents = styled.div`
    display: flex;
    gap: 70px;
    margin: 100px 50px;
`

const MenuDiv = styled.div`
    width: 25%;
    background-color: gray;
`

const ContentDiv = styled.div`
    width: 75%;
`

