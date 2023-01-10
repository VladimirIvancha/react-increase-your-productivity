import React from "react";
import "./CoverFlowSwiper.css";

import photo1 from "../../../assets/images/photo1.jpg";
import photo2 from "../../../assets/images/photo2.jpg";
import photo3 from "../../../assets/images/photo3.jpg";
import photo4 from "../../../assets/images/photo4.jpg";
import photo5 from "../../../assets/images/photo5.jpg";

import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/effect-coverflow";

SwiperCore.use([EffectCoverflow, Pagination]);

function CoverFlowSwiper() {
  return (
    <div className="photo-container">
      <Swiper
        effect="coverflow"
        grabCursor="true"
        centeredSlides="true"
        spaceBetween={0}
        slidesPerView={4}
        loop="true"
        pagination={{ clickable: true, dynamicBullets: true }}
        coverflowEffect={{
          rotate: 20,
          stretch: 25,
          depth: 250,
          modifier: 1,
          slideShadows: false,
        }}
        breakpoints={{
          700: {
            spaceBetween: 0,
            slidesPerView: 4,
          },
          500: {
            spaceBetween: 100,
            slidesPerView: 2,
          },
          411: {
            spaceBetween: 100,
            slidesPerView: 2,
          },
          300: {
            spaceBetween: 0,
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide>
            <img src={photo1} alt="pic1" className="photos" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo2} alt="pic2" className="photos" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo3} alt="pic3" className="photos" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo4} alt="pic4" className="photos" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo5} alt="pic5" className="photos" />
          </SwiperSlide>
        </Swiper>
    </div>
  );
};

export default CoverFlowSwiper;