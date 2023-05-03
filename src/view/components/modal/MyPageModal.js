import React from 'react'
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { assets } from '../../../model/lib/assets';
import { getMemberGradeColorCode } from '../../../module/ColorCode';
import { useNavigate } from 'react-router-dom';
import { loginUserSlice, myInformationSlice } from '../../../model/accounts/reducer/accountReducers';
import fetchAccount from "../../../api/fetch/fetchAccount";

/**
 * History
 ** 2023-04-04: 임주형 - 최초생성
 * @param {number} parentHeight 부모엘리먼트 높이
 * @returns {MyPageModal} Component
 */

function MyPageModal({ parentHeight, onUnmount }) {
    const myInformation = useSelector(state => state.MyInformation);
    const { grade, name, email } = myInformation.data || {};
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logout = () => {fetchAccount.logout().then(() => {
            dispatch(loginUserSlice.actions.initState());
            dispatch(myInformationSlice.actions.initState());
            onUnmount();
            navigate('/login');
        });
    }

    return (
        <Contents parentHeight={parentHeight}>
            <div className='flex'>
                <MyInfoLeftDiv>
                    <span className={`text-[${getMemberGradeColorCode(grade)}] text-xs`}>
                        {grade}
                    </span>
                    <span
                        className="font-semibold text-base hover:underline cursor-pointer"
                        onClick={() => navigate('/myPage')}
                    >
                        {name}{" >"}
                    </span>
                    <span className="text-[#AAAAAA] text-xs mt-1">
                        {email}
                    </span>
                </MyInfoLeftDiv>
                <MyInfoRightDiv>
                    <RewardsDiv>
                        <img src={assets.couponIcon} alt="coupon_icon" width="15px" />
                        5
                    </RewardsDiv>
                    <RewardsDiv>
                        <img src={assets.rewardPointsIcon} alt="reward_points_icon" width="15px" />
                        99,000,000
                    </RewardsDiv>
                    <RewardsDiv>
                        <img src={assets.wishlistIcon} alt="wishlist_icon" width="15px" />
                        50
                    </RewardsDiv>
                </MyInfoRightDiv>
            </div>
            <LogoutDiv>
                <button
                    className="hover:underline"
                    onClick={() => logout()}
                >로그아웃
                </button>
            </LogoutDiv>
        </Contents>
    );
}

export default MyPageModal;

const Contents = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 300px;
    top: ${props => props.parentHeight};
    left: 0;
    z-index: 1000;
    background-color: white;
    padding-top: 20px;
    border-radius: 0.375rem;
    box-shadow: 0px 1px 5px rgba(0 0 0 / 0.15);
    overflow: hidden;
`

const MyInfoLeftDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding-left: 15px;
`

const MyInfoRightDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    width: 100%;
    gap: 5px;
    padding-right: 15px;
`

const RewardsDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`

const LogoutDiv = styled.div`
    display: flex;
    justify-content: end;
    margin-top: 24px;
    padding: 8px 0;
    padding-right: 15px;
    background-color: #F9F9F9;
    color: #333333;
`