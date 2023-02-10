import AppLogo from '../logo.svg';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Header.css'

function Header() {
    const [hiddenSearchBar, setHiddenSearchBar] = useState(false);
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        setSearchText(e.target.value);
    }

    const movePage = (pageName) => {
        pageName === '/' ? setHiddenSearchBar(false) : setHiddenSearchBar(true);
        setSearchText("");
        navigate(pageName);
    }

    return (
        // flex mx-96 w-full h-24 justify-between mt-8
        <div className="Header">
            <img className="Logo" src={AppLogo} alt="app_logo" onClick={() => movePage('/')}/>
            <div className="MidMenuBar">
                <form
                    className={hiddenSearchBar ? "hidden" : "SearchForm"}
                    onSubmit={handleSubmit}
                >
                    <input
                        className="SearchBar"
                        type="text"
                        onChange={handleChange}
                        value={searchText}
                    />
                    <button className="SearchButton">
                        <img src={AppLogo} />
                    </button>
                </form>
                <div className="MidMenu">
                    <button>메뉴1</button>
                    <button>메뉴2</button>
                    <button>메뉴3</button>
                    <button>메뉴4</button>
                    <button>메뉴5</button>
                </div>
            </div>

            <div className="SideMenuBar">
                <button className="ImageButton" onClick={() => movePage('/login')} >
                    <img src={AppLogo} alt="login_img" />로그인
                </button>
                <button className="ImageButton" onClick={() => movePage('/general_register')}>
                    <img src={AppLogo} alt="login_img" />회원가입
                </button>
                <button className="ImageButton">
                    <img src={AppLogo} alt="login_img" />고객센터
                </button>
                <button className="ImageButton">
                    <img src={AppLogo} alt="login_img" />장바구니
                </button>
            </div>
        </div>
    );
}
export default Header;