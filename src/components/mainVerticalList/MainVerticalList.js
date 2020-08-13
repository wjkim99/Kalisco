//import React, { useState } from "react";
import React from "react";
import SwiperCore, { Mousewheel, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import firstBanner from "../../static/images/main-banner-1.png";

import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "./main_vertical_list.scss";

function MainVerticalList() {
    SwiperCore.use([Mousewheel, Pagination]);

    return (
        <Swiper
            slidesPerView={1}
            //onSlideChange={setActiveIndex}
            //onSwiper={(swiper) => console.log(swiper)}
            direction="vertical"
            mousewheel
            pagination={{ clickable: true }}
            loop={false}
            spaceBetween={0}
            speed={650}
        >
            <SwiperSlide>
                <div className="first-main-banner-bg-wrapper"></div>
                <div className="wh-100">
                    <img
                        src={firstBanner}
                        alt="First Banner"
                        className="img-fill"
                    />
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

export default MainVerticalList;
