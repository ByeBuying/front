import React from 'react';

function Footer() {
    return (
        <div className="flex h-80 bg-black relative translate-y-full px-32 py-20">
            <div className="w-4/5">
                <div className="flex gap-10 text-white mb-12">
                    <button>이용약관</button>
                    <button>개인정보처리방침</button>
                    <button>마케팅 수신동의</button>
                </div>
                <div className="flex text-neutral-400 gap-10">
                    <span>(주)모인</span>
                    <span>서울 강남구 논현로 233(가나동, 다라마빌딩)</span>
                </div>
                <div className="flex text-neutral-400 gap-10">
                    <span>대표자: 홍길동</span>
                    <span>개인정보보호책임자: 홍길동</span>
                    <span>moin123@gmail.com</span>
                </div>
                <div className="flex text-neutral-400 gap-10 mb-12">
                    <span>사업자등록번호:123-45-67890</span>
                    <span>통신판매업신고:제0000호-서울강남-00000호</span>
                </div>
                <div className="text-neutral-600">
                    <span>COPYRIGHT ⓒ 2023 MOIN, ALL RIGHTS RESERVED.</span>
                </div>
            </div>
            <div className="w-1/5">
                <p className="text-lg text-white">고객센터</p>
                <p className="text-4xl text-white">1234-5678</p>
                <p className="text-neutral-400">MON-FRI 09:00~17:00</p>
                <p className="text-neutral-400">주말, 공휴일 제외</p>
                <div className="flex text-white gap-10 mt-12">
                    <button>입점 문의</button>
                    <button>1:1 문의</button>
                </div>
            </div>
        </div>
    );
}
export default Footer;