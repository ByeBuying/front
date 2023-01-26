import React from 'react';
import AppLogo from '../logo.svg'

function Login() {
    return (
        <div>
            <div className="flex mt-32 h-20 justify-center mb-10">
                <button className="w-40 border">회원 로그인</button>
                <button className="w-40 border" >비회원 주문조회</button>
            </div>
            <form className="grid items-center justify-center mb-10">
                <input
                    className="h-16 w-80 border-b border-gray-100"
                    type="text"
                    placeholder='아이디'
                />
                <input
                    className="h-16 border-b border-gray-100"
                    type="password"
                    placeholder='비밀번호'
                />
                <div className="flex justify-between my-5">
                    <div>
                        <input
                            className="mr-1"
                            id="checkbox"
                            type="checkbox" />
                        <label for="checkbox">아이디 저장</label>
                    </div>
                    <button type="button">아이디/비밀번호 찾기</button>
                </div>
                <button className="h-14 text-white bg-[#5223CB] my-5" type="button">로그인</button>
                <button className="h-14 text-[#5223CB] border" type="button">회원가입</button>
            </form>
            <span className="flex justify-center mb-10">간편 로그인</span>
            <div className="flex justify-center gap-2">
                <button className="w-16">
                    <img src={AppLogo}/>
                </button>
                <button className="w-16">
                    <img src={AppLogo}/>
                </button>
                <button className="w-16">
                    <img src={AppLogo}/>
                </button>
            </div>
        </div>
    );
}
export default Login;