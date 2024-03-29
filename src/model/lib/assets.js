const BASE_URL = process.env.PUBLIC_URL + "/assets/";

export const assets = {
    loginIcon: BASE_URL + "icon/login_icon.svg",                                // 로그인
    myinfoIcon: BASE_URL + "icon/myinfo_icon.svg",                              // 내정보(마이페이지)
    customerServiceIcon: BASE_URL + "icon/customer_service_icon.svg",           // 고객센터
    cartIcon: BASE_URL + "icon/cart_icon.svg",                                  // 장바구니
    searchIcon: BASE_URL + "icon/search_icon.svg",                              // 돋보기(검색)
    couponIcon: BASE_URL + "icon/coupon_icon.svg",                              // 쿠폰
    rewardPointsIcon: BASE_URL + "icon/reward_points_icon.svg",                 // 적립금
    wishlistIcon: BASE_URL + "icon/wishlist_icon.svg",                          // 찜
    termsAggrementIcon: BASE_URL + "icon/terms_aggrement.svg",                  // 약관동의(30%)
    registerIcon: BASE_URL + "icon/register.svg",                               // 회원가입
    completeRegisterIcon: BASE_URL + "icon/complete_register.svg",              // 회원가입 완료
    congratulationsIcon: BASE_URL + "icon/congratulations.svg",                 // 축하해요
}
Object.freeze(assets);