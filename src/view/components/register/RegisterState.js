import React from 'react';
import styled from 'styled-components';
import { assets } from '../../../model/lib/assets';

function RegisterState({ currentState }) {
    return (
        <Contents>
            <ImageDiv>
                {/* State 1 */}
                {currentState === 1 ? 
                    (<StyledImg src={assets.termsAggrementIcon} alt="약관동의" />) : 
                    (<StyledImg opacity={0.4} src={assets.termsAggrementIcon} alt="약관동의" />)
                } <p>약관동의</p>
            </ImageDiv>
            <ImageDiv>
                {/* State 2 */}
                {currentState === 2 ? 
                    (<StyledImg src={assets.registerIcon} alt="회원정보 입력"/>) :
                    (<StyledImg opacity={0.4} src={assets.registerIcon} alt="회원정보 입력"/>)
                } <p>회원정보 입력</p>
            </ImageDiv>
            <ImageDiv>
                {/* State 3 */}
                {currentState === 3 ?
                    (<StyledImg src={assets.completeRegisterIcon} alt="회원가입 완료"/>) :
                    (<StyledImg opacity={0.4} src={assets.completeRegisterIcon} alt="회원가입 완료"/>)
                } <p>회원가입 완료</p>
            </ImageDiv>
        </Contents>
    )
}

export default RegisterState;

const Contents = styled.div`
    display: flex;
    width: 450px;
    height: 100px;
    object-fit: contain;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    font-size: 14px;
    margin: 60px 0;
`

const ImageDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
`

const StyledImg = styled.img`
    width: 50px;
    height: 50px;
    margin-bottom: 10px;

    opacity: ${props => props.opacity};
`