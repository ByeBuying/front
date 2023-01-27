import AppLogo from '../logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';

function Header({ hiddenSearchBar, setHiddenSearchBar, searchText, setSearchText }) {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        setSearchText(e.target.value);
    }

    return (
        <div className="flex mx-100 w-full h-24 justify-between mt-8">
            <Link to='/' className="flex w-1/3 justify-center object-contain">
                <img src={AppLogo} alt="app_logo" />
            </Link>
            <div className="w-1/3">
                <form
                    className={hiddenSearchBar ? "hidden" : "mt-8 relative"}
                    onSubmit={handleSubmit}
                >
                    <input
                        className="w-full border-b-2 border-black"
                        type="text"
                        onChange={handleChange}
                        value={searchText}
                    />
                    <button className="w-8 absolute">
                        <img src={AppLogo} />
                    </button>
                </form>
                <div className="flex justify-center gap-16 mt-10">
                    <button>메뉴1</button>
                    <button>메뉴2</button>
                    <button>메뉴3</button>
                    <button>메뉴4</button>
                </div>
            </div>

            <div className="flex w-1/3 justify-center items-center gap-5">
                <button className="w-14">
                    <Link to='/login' >
                        <img src={AppLogo} alt="login_img" />로그인
                    </Link>
                </button>
                <button>
                    <Link to='/general_register' >
                        <img src={AppLogo} alt="login_img" />회원가입
                    </Link>
                </button>
                <button>
                    <img src={AppLogo} alt="login_img" />고객센터
                </button>
                <button>
                    <img src={AppLogo} alt="login_img" />장바구니
                </button>
            </div>
        </div>
    );
}
export default Header;