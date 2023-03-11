import React from 'react';
import './css/Footer.css';

function Footer() {
    return (
        <div className="Footer">
            <div className="LeftContents">
                <div className="TermsAndConditions">
                    <button>이용약관</button>
                    <button>개인정보처리방침</button>
                    <button>마케팅 수신동의</button>
                </div>
                <div className="CompanyInfo">
                    <span>(주)모인</span>
                    <span>서울 강남구 논현로 233(가나동, 다라마빌딩)</span>
                </div>
                <div className="CompanyInfo">
                    <span>대표자: 홍길동</span>
                    <span>개인정보보호책임자: 홍길동</span>
                    <span>moin123@gmail.com</span>
                </div>
                <div className="CompanyInfo">
                    <span>사업자등록번호:123-45-67890</span>
                    <span>통신판매업신고:제0000호-서울강남-00000호</span>
                </div>
                <div className="Copyright">
                    <span>COPYRIGHT ⓒ 2023 MOIN, ALL RIGHTS RESERVED.</span>
                </div>
            </div>
            <div className="RightContents">
                <p className="CustomerService">고객센터</p>
                <p className="PhoneNumber">1234-5678</p>
                <p className="Comment">MON-FRI 09:00~17:00</p>
                <p className="Comment">주말, 공휴일 제외</p>
                <div className="Demend">
                    <button>입점 문의</button>
                    <button>1:1 문의</button>
                </div>
            </div>
        </div>
    );
}
export default Footer;