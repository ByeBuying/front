import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper.min.css';

/**  테스팅 어려워서 Swiper 모듈 안 쓸 예정 */

// import 'swiper/modules/navigation/navigation.min.css';
// import 'swiper/modules/pagination/pagination.min.css';
// import 'swiper/modules/scrollbar/scrollbar.min.css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import styled from 'styled-components';

function Notice({ notice }) {
    return (
        <StyledSwiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            }}>

            {notice && notice.map((data) => (
                <SwiperSlide>
                    <Img
                        key={data.id}
                        src={`https://image.tmdb.org/t/p/original/${data.imgUrl}`}
                        alt="notice"/>
                </SwiperSlide>
            ))}
        </StyledSwiper>
    )
}

export default Notice;

const StyledSwiper = styled(Swiper)`
    display: flex;
    flex-direction: row;
    width: 800px;
    height: 400px;
    border-radius: 15px;
    overflow: hidden;
`

const Img = styled.img`
    width: inherit;
    height: inherit;
`