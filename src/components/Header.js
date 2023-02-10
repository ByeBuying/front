import AppLogo from '../logo.svg';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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

    const toMainPage = () => {
        setHiddenSearchBar(false);
        setSearchText("");
        navigate('/');
    }

    const toLoginPage = () => {
        setHiddenSearchBar(true);
        navigate('/login');
    }

    return (
        // flex mx-96 w-full h-24 justify-between mt-8
        <div className="Header">
            <img className="Logo" src={AppLogo} alt="app_logo" onClick={toMainPage}/>
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
                <button className="ImageButton" onClick={toLoginPage}>
                    <img src={AppLogo} alt="login_img" />로그인
                </button>
                <button className="ImageButton">
                    <Link to='/general_register' >
                        <img src={AppLogo} alt="login_img" />회원가입
                    </Link>
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