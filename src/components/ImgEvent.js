import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AppLogo from '../logo.svg';

function ImgEvent() {
  return (
    <Contents innerWidth={window.innerWidth}>
        <TextDiv>
            <p className="text-2xl text-white font-semibold">2023 HAPPY NEW YEAR</p>
            <p className="text-xs text-white">매일을 더욱 특별하게</p>
            <Link className="mt-5 text-xs text-[#FF9900]" to>보러가기 {">"}</Link>
        </TextDiv>
        <ImgDiv>
            <StyledImg src={AppLogo}/>
        </ImgDiv>
    </Contents>
  )
}
export default ImgEvent;

const Contents = styled.div`
    min-width: ${(props) => props.innerWidth}px;
    height: 300px;
    background-color: #4C23B6;
    display: flex;
    justify-content: center;
`

const TextDiv = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: translateX(200px);

    @media screen and (max-width: 1080px) {
        transform: translateX(100px);
    }
`

const ImgDiv = styled.div`
    width: 50%;
    overflow: hidden;
`

const StyledImg = styled.img`
    width: 100%;
    height: 100%;
`