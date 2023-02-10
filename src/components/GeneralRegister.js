import React from 'react';
import AppLogo from '../logo.svg'

function GeneralRegister() {
    const summary = (id) => {
        
    }

    return (
        <div className="grid content-margin justify-center">
            <button className="flex justify-center items-center w-80 h-14 bg-yellow-300 mb-10">
                <p>카카오톡 1초 회원가입</p>
            </button>

            <div className="flex w-80 h-20 object-contain justify-between items-center px-5 mb-10 general-font">
                <div className="grid w-1/4 ">
                    <img src={AppLogo} />
                    <p className="justify-self-center">약관동의</p>
                </div>
                <img className="w-4 h-4" src={AppLogo} />
                <div className="grid w-1/4">
                    <img src={AppLogo} />
                    <p>회원정보 입력</p>
                </div>
                <img className="w-4 h-4" src={AppLogo} />
                <div className="grid w-1/4">
                    <img src={AppLogo} />
                    <p>회원정보 완료</p>
                </div>
            </div>

            <div className="grid w-80 general-font mb-20">
                <div className="flex w-80 bg-stone-100 mb-3 items-center justify-between px-2">
                    <button className="general-font" >
                        쇼핑몰 이용약관
                    </button>
                    <div className="flex items-center">
                        <input className="mr-1" type="checkbox" id="agree" />
                        <label for="agree">동의합니다</label>
                    </div>
                </div>
            </div>

            <div className="flex w-80 h-10 bg-slate-900 items-center justify-center">
                <p className="general-font text-white">약관동의</p>
            </div>
        </div>
    );
}
export default GeneralRegister;