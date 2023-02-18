import React from 'react';
import AppLogo from '../logo.svg'
import './css/Register.css';

function Register() {
    const summary = (id) => {
        
    }

    return (
        <div className="Register">
            <button className="KakaoRegister">
                <p>카카오톡 1초 회원가입</p>
            </button>

            <div className="StatusDiv">
                <div className="ImageBox">
                    <img src={AppLogo} />
                    <p>약관동의</p>
                </div>
                <img className="DirectionIcon" src={AppLogo} />
                <div className="ImageBox">
                    <img src={AppLogo} />
                    <p>회원정보 입력</p>
                </div>
                <img className="DirectionIcon" src={AppLogo} />
                <div className="ImageBox">
                    <img src={AppLogo} />
                    <p>회원정보 완료</p>
                </div>
            </div>
            {/* 이용약관 */}
            <div className="NextButton">
                <p className="text-white">약관동의</p>
            </div>
        </div>
    );
}
export default Register;