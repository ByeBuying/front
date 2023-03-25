import React, { useEffect, useState } from 'react';
import AppLogo from '../../logo.svg'
import fetchLogin from '../../api/fetch/fetchLogin';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AccountsCode from '../../model/accounts/code/AccountsCode';
import styled from 'styled-components';
import MessageDialog from './MessageDialog';
import DialogType from '../../model/common/DialogType';

function Login() {
    const dispatch = useDispatch();
    const loginUser = useSelector((state) => state.LoginUser);
    const navigate = useNavigate();
    const [clickedLoginButton, setClickedLoginButton] = useState(false);
    const [openLoginFailDialog, setOpenLoginFailDialog] = useState(false);

    useEffect(() => {
        if (clickedLoginButton) {
            switch (loginUser.code) {
                case AccountsCode.SUCCESS:
                    navigate('/');
                    break;
                case AccountsCode.BAD_CREDENTIALS:
                    // 다이얼로그 오픈
                    setOpenLoginFailDialog(true);
                    break;
                default: ;
            }
            setClickedLoginButton(false);
        }
    }, [loginUser]);

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
        setClickedLoginButton(true);
        dispatch(fetchLogin(inputs));
    }

    const movePage = (pathname) => navigate(pathname);

    return (
        <Contents>
            {openLoginFailDialog &&
                <MessageDialog
                    title={"로그인 실패"}
                    content={"아이디 또는 비밀번호가 틀렸습니다."}
                    type={DialogType.CONFIRM}
                    confirm={() => {
                        setOpenLoginFailDialog(false);
                    }}>
                </MessageDialog>
            }

            <TopButtonDiv>
                <TopButton>회원 로그인 </TopButton>
                <TopButton>비회원 주문조회</TopButton>
            </TopButtonDiv>
            <LoginForm onSubmit={requestLogin}>
                <Input
                    name="email"
                    type="email"
                    placeholder='이메일'
                    onChange={handleChange}
                />
                <Input
                    name="password"
                    type="password"
                    placeholder='비밀번호'
                    onChange={handleChange}
                />
                <SaveAndFindDiv>
                    <div>
                        <input
                            className="mr-[1px]"
                            id="checkbox"
                            type="checkbox" />
                        <label htmlFor="checkbox"> 아이디 저장</label>
                    </div>
                    <button type="button">아이디/비밀번호 찾기</button>
                </SaveAndFindDiv>
                <LoginButton type="submit">로그인</LoginButton>
                <RegisterButtonLink type="button" onClick={() => movePage('/register')}>회원가입</RegisterButtonLink>
            </LoginForm>
            <SimpleLoginDiv> 간편 로그인
                <LoginApiButtonsDiv>
                    <button className="w-14">
                        <img src={AppLogo} />
                    </button>
                    <button className="w-14">
                        <img src={AppLogo} />
                    </button>
                    <button className="w-14">
                        <img src={AppLogo} />
                    </button>
                </LoginApiButtonsDiv>
            </SimpleLoginDiv>
        </Contents>
    );
}
export default Login;

const Contents = styled.div`
    margin: 140px 0;
`

const TopButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    height: 80px;
`

const TopButton = styled.button`
    width: 160px;
    border-width: 1px;
`

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 60px 0;
`

const Input = styled.input`
    width: 320px;
    height: 64px;
    border-bottom-width: 1px;
    border-color: rgba(243 244 246 / 1);
`

const SaveAndFindDiv = styled.div`
    display: flex;
    width: 320px;
    justify-content: space-between;
    margin: 20px 0;
`

const LoginButton = styled.button`
    width: 320px;
    height: 56px;
    color: rgba(255 255 255 / 1);
    background-color: #5223CB;
    margin-bottom: 5px;
`

const RegisterButtonLink = styled.button`
    width: 320px;
    height: 56px;
    color: #5223CB;
    border-width: 1px;
`

const SimpleLoginDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`

const LoginApiButtonsDiv = styled.div`
    display: flex;
    gap: 20px;
`