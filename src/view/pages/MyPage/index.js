import React, { useEffect } from 'react'
import styled from 'styled-components';
import Profile from '../../components/Profile';

function MyPage() {

    useEffect(() => {
    }, []);

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

