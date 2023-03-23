import AppLogoImg from '../../logo.svg';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import AccountsCode from '../../model/accounts/AccountsCode';

function Header() {
    const [hiddenSearchBar, setHiddenSearchBar] = useState(false);
    const [searchText, setSearchText] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const loginState = useSelector(state => state.LoginUser.code);

    useEffect(() => {
        // 현재 페이지 주소 확인 -> 메인 페이지에서만 검색창 노출
        location.pathname === '/' ? setHiddenSearchBar(false) : setHiddenSearchBar(true);
    }, [location]);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => setSearchText(e.target.value);

    const movePage = (pathname) => {
        setSearchText("");
        navigate(pathname);
    }

    const isLogin = (loginState) => loginState === AccountsCode.SUCCESS;

    return (
        <Contents>
            <AppLogoDiv>
                <img src={AppLogoImg} alt="app_logo_img" onClick={() => movePage('/')} />
            </AppLogoDiv>
            <MidMenuBarDiv>
                <SearchForm hiddenSearchBar={hiddenSearchBar}
                    onSubmit={handleSubmit}>
                    <SearchInput
                        type="text"
                        onChange={handleChange}
                        value={searchText}
                    />
                    <SearchButton>
                        <img src={AppLogoImg} />
                    </SearchButton>
                </SearchForm>
                <MidMenuDiv>
                    <button>메뉴1</button>
                    <button>메뉴2</button>
                    <button>메뉴3</button>
                    <button>메뉴4</button>
                    <button>메뉴5</button>
                </MidMenuDiv>
            </MidMenuBarDiv>

            <SideMenuBarDiv>
                {isLogin(loginState) &&
                    <ImageButton>
                        <SideMenuImg src={AppLogoImg} alt="login_img" /> 마이페이지
                    </ImageButton> 
                }
                {!isLogin(loginState) &&
                    <ImageButton onClick={() => movePage('/login')} >
                        <SideMenuImg src={AppLogoImg} alt="login_img" />로그인
                    </ImageButton>
                }
                {!isLogin(loginState) &&
                    <ImageButton onClick={() => movePage('/register')}>
                        <SideMenuImg src={AppLogoImg} alt="login_img" />회원가입
                    </ImageButton>
                }
                <ImageButton>
                    <SideMenuImg src={AppLogoImg} alt="login_img" />고객센터
                </ImageButton>
                <ImageButton>
                    <SideMenuImg src={AppLogoImg} alt="login_img" />장바구니
                </ImageButton>
            </SideMenuBarDiv>
        </Contents>
    );
}
export default Header;

const Contents = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    height: 96px;
    margin-top: 35px;
    padding: 0 200px;
`

const AppLogoDiv = styled.div`
    display: flex;
    justify-content: left;
    width: 33%;
    cursor: pointer;
`
const MidMenuBarDiv = styled.div`
    display: flex;
    width: 33%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const SearchForm = styled.form`
    display: ${props => props.hiddenSearchBar ? "none" : "flex"};
    justify-content: right;
    align-items: center;
    width: 100%;
    height: 50%;
`

const SearchInput = styled.input`
    width: 100%;
    height: 100%;
    border-bottom: 2px solid;
    border-color: rgba(0, 0, 0, 0.5);
`

const SearchButton = styled.button`
    width: 40px;
    height: fit-content;
    position: absolute;
`

const MidMenuDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 50%;
    margin-top: 10px;
`
const SideMenuBarDiv = styled.div`
    display: flex;
    width: 33%;
    justify-content: right;
    align-items: center;
    gap: 10px;
    font-size: 14px;
`

const ImageButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70px;
`

const SideMenuImg = styled.img`
    width: 50px;
`