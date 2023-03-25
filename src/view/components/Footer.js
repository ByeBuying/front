import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
        <Contents>
            <LeftContentsDiv>
                <TermsAndConditions>
                    <button>이용약관</button>
                    <button>개인정보처리방침</button>
                    <button>마케팅 수신동의</button>
                </TermsAndConditions>
                <CompanyInfoDiv>
                    <span>(주)모인</span>
                    <span>서울 강남구 논현로 233(가나동, 다라마빌딩)</span>
                </CompanyInfoDiv>
                <CompanyInfoDiv>
                    <span>대표자: 홍길동</span>
                    <span>개인정보보호책임자: 홍길동</span>
                    <span>moin123@gmail.com</span>
                </CompanyInfoDiv>
                <CompanyInfoDiv>
                    <span>사업자등록번호:123-45-67890</span>
                    <span>통신판매업신고:제0000호-서울강남-00000호</span>
                </CompanyInfoDiv>
                <CopyrightDiv>
                    <span>COPYRIGHT ⓒ 2023 MOIN, ALL RIGHTS RESERVED.</span>
                </CopyrightDiv>
            </LeftContentsDiv>
            <RightContents>
                <CustomerServiceP>고객센터</CustomerServiceP>
                <PhoneNumberP>1234-5678</PhoneNumberP>
                <CommentP>MON-FRI 09:00~17:00</CommentP>
                <CommentP>주말, 공휴일 제외</CommentP>
                <DemendDiv>
                    <button>입점 문의</button>
                    <button>1:1 문의</button>
                </DemendDiv>
            </RightContents>
        </Contents>
    );
}
export default Footer;

const Contents = styled.div`
    position: relative;
    display: flex;
    background-color: rgba(0, 0, 0, 1);
    padding: 60px 40px;
    align-items: center;
    height: 350px;
`

const LeftContentsDiv = styled.div`
    width: 75%;
`

const TermsAndConditions = styled.div`
    position: absolute;
    top: 0;
    margin-top: 60px;
    display: flex;
    gap: 40px;
    color: rgba(255, 255, 255, 1);
`

const CompanyInfoDiv = styled.div`
    display: flex;
    color: rgba(163, 163, 163, 1);
    gap: 10px;
`
const CopyrightDiv = styled.div`
    position: absolute;
    bottom: 0;
    color: rgba(82, 82, 82, 1);
    margin-bottom: 60px;
`

const RightContents = styled.div`
    width: 25%;
    align-items: center;
`

const CustomerServiceP = styled.p`
    position: absolute;
    top: 0;
    font-size: 18px;
    color:rgba(255, 255, 255, 1);
    margin-top: 90px;
`
const PhoneNumberP = styled.p`
    font-size: 34px;
    color:rgba(255, 255, 255, 1);
`

const CommentP = styled.p`
    color: rgba(163, 163, 163, 1);
`

const DemendDiv = styled.div`
    display: flex;
    position: absolute;
    bottom: 0;
    gap: 30px;
    margin-bottom: 60px;
    color:rgba(255, 255, 255, 1);
`