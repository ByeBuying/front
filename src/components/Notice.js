import './css/Notice.css'
import React, { useEffect, useState } from 'react'
import fetchNotice from '../api/fetchNotice';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Notice() {
    const [notice, setNotice] = useState([]);
    useEffect(() => {
        fetchNotice().then(resolveData => setNotice(resolveData));
    }, []);

    console.log(notice);

    return (
        <Swiper className="Notice"
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
                        className="ImgFrame"
                        src={`https://image.tmdb.org/t/p/original/${data.imgUrl}`}
                        alt="notice"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Notice;