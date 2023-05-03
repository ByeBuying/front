import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Profile from '../../components/Profile';
import { loginUserSlice, myInformationSlice } from '../../../model/accounts/reducer/accountReducers';
import { useNavigate } from 'react-router-dom';
import Unregister from '../../components/unregister/Unregister';

function MyPage() {
    const myInformation = useSelector(state => state.MyInformation);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        // No Session
        if(myInformation.data === null) {
            alert("접근 권한이 없습니다.");
            // Delete state
            dispatch(loginUserSlice.actions.initState());
            dispatch(myInformationSlice.actions.initState());
            navigate('/login');
        }
    }, []);
    
    return (
        <Contents>
            <MenuDiv>
            </MenuDiv>
            <ContentDiv>
                {/* <Profile /> */}
                <Unregister />
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

