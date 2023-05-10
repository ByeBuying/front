import AppLogoImg from '../../logo.svg';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { assets } from '../../model/lib/assets';
import MyPageModal from './modal/MyPageModal';

function Header() {
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState("");
    const [showMyPageModal, setShowMyPageModal] = useState(false);
    const [myPageBtnHeight, setMyPageBtnHeight] = useState(0);
    const myInformation = useSelector(state => state.MyInformation);
    
    const isLogin = (myInformation) => myInformation.data !== null;
    
    // 검색창
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleChange = (e) => setSearchText(e.target.value);

    const movePage = (pathname) => {
        setSearchText("");
        navigate(pathname);
    }

    const handleMyPageBtnMouseEnter = (e) => {
        const target = e.currentTarget;
        setMyPageBtnHeight(target.offsetHeight);
        setShowMyPageModal(true);
    }

    const handleMyPageBtnMouseLeave = () => setShowMyPageModal(false);

    const handleModalUnmount = () => setShowMyPageModal(false);

    return (
        <Contents data-testid="header-component">
            <AppLogoDiv>
                <img src={AppLogoImg} alt="app_logo_img" onClick={() => movePage('/')} />
            </AppLogoDiv>
            <MidMenuBarDiv>
                <SearchForm onSubmit={handleSubmit}>
                    <SearchInput
                        type="text"
                        onChange={handleChange}
                        value={searchText}
                    />
                    <SearchButton>
                        <img src={assets.searchIcon} alt="search_icon" />
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
                {isLogin(myInformation) &&
                    <div className='relative'
                        onMouseEnter={handleMyPageBtnMouseEnter}
                        onMouseLeave={handleMyPageBtnMouseLeave}
                    >
                        <ImageButton onClick={() => movePage('/myPage')}>
                            <SideMenuImg src={assets.myinfoIcon} alt="myinfo_icon" /> 마이페이지
                        </ImageButton>
                        {/* 마이페이지 모달 */}
                        {showMyPageModal && (<MyPageModal parentHeight={myPageBtnHeight} onUnmount={() => handleModalUnmount()}/>)}
                    </div>
                }

                {!isLogin(myInformation) &&
                    <ImageButton onClick={() => movePage('/login')} >
                        <SideMenuImg src={assets.loginIcon} alt="login_icon" />로그인
                    </ImageButton>
                }
                <ImageButton>
                    <SideMenuImg src={assets.customerServiceIcon} alt="customer_service_icon" />고객센터
                </ImageButton>

                <ImageButton>
                    <SideMenuImg src={assets.cartIcon} alt="cart_icon" />장바구니
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
    margin-top: 80px;
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
    display: flex;
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
    width: 25px;
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
    gap: 5px;
    font-size: 14px;
`

const ImageButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70px;
`

const SideMenuImg = styled.img`
    width: 22px;
    margin-bottom: 5px;
`