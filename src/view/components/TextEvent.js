import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function TextEvent({ pageLink }) {
  return (
    <Contents>
      <StyledLink to={pageLink}>Moin! 2023 Event 보러가기</StyledLink>
    </Contents>
  )
}

export default TextEvent;

const Contents = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    z-index: 1000;
    background-color: #5223CB;

`

const StyledLink = styled(Link)`
    color: white;

    @media screen and (max-width: 1080px) {
        font-size: 12px;
    }
`
