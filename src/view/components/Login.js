import React, { useEffect, useState } from 'react';
import './css/Login.css'
import AppLogo from '../../logo.svg'
import fetchLogin from '../../api/fetchUser';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AccountsCode from '../../model/accounts/AccountsCode';

function Login() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.LoginUser);
    const navigate = useNavigate();

    useEffect(() => {
        // session 확인
        switch(user.code) {
            case AccountsCode.SUCCESS:
                navigate('/');
                break;
            case AccountsCode.BAD_CREDENTIALS:
                console.log("로그인 실패");
                break;
            default: ;
        }

    }, [user]);
    
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    }

    const requestLogin = (e) => {
        e.preventDefault();
        dispatch(fetchLogin(inputs));
        
    }

    return (
        <div className="Login">
            <div className="TopButtonDiv">
                <button className="Member" >회원 로그인 </button>
                <button className="NonMember" >비회원 주문조회</button>
            </div>
            <form className="LoginForm" onSubmit={requestLogin}>
                <input
                    name="email"
                    className="Id"
                    type="email"
                    placeholder='이메일'
                    onChange={handleChange}
                />
                <input
                    name="password"
                    className="Password"
                    type="password"
                    placeholder='비밀번호'
                    onChange={handleChange}
                />
                <div className="Div">
                    <div>
                        <input
                            className="SaveIdCheckbox"
                            id="checkbox"
                            type="checkbox" />
                        <label htmlFor="checkbox">아이디 저장</label>
                    </div>
                    <button type="button">아이디/비밀번호 찾기</button>
                </div>
                <button className="LoginButton" type="submit">로그인</button>
                <button className="RegisterButton" type="button">회원가입</button>
            </form>
            <div className="SimpleLoginDiv"> 간편 로그인
                <div className="LoginApiButtons">
                    <button className="w-14">
                        <img src={AppLogo} />
                    </button>
                    <button className="w-14">
                        <img src={AppLogo} />
                    </button>
                    <button className="w-14">
                        <img src={AppLogo} />
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Login;