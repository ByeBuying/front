import AppLogo from '../logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css'

function Header({ hiddenSearchBar, setHiddenSearchBar, searchText, setSearchText }) {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        setSearchText(e.target.value);
    }

    return (
        // flex mx-96 w-full h-24 justify-between mt-8
        <div className="Header">
            <Link to='/' className="Logo">
                <img src={AppLogo} alt="app_logo" />
            </Link>
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
                <button className="ImageButton">
                    <Link to='/login' >
                        <img src={AppLogo} alt="login_img" />로그인
                    </Link>
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