import style from './css/Notice.module.css';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Notice({ notice }) {
    return (
        <Swiper className={style.Notice}
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            }}
        >

            {notice.map((data) => (
                <SwiperSlide>
                    <img
                        key={data.id}
                        className={style.ImgFrame}
                        src={`https://image.tmdb.org/t/p/original/${data.imgUrl}`}
                        alt="notice"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Notice;