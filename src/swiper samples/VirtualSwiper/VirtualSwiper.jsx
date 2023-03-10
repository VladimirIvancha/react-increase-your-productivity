import React from "react";

import { initialQuotesData } from "../../../utils/initial-data";
import MenuQuotesItem from "../../Items/MenuQuotesItem/MenuQuotesItem";

import { Virtual, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/virtual";

import "./QuotesSwiper.scss";

function VirtualSwiper() {
  const slides = initialQuotesData.map(
    item => (
      <MenuQuotesItem 
        key={item.id}
        item={item}
      />
    ) 
  );

  return (
    <div className="quotesSwiper__container">
      <Swiper 
        modules={[Virtual, Pagination]} 
        spaceBetween={50}
        slidesPerView={2}
        grabCursor="true"
        slideToClickedSlide="true"
        pagination={{ clickable: true}}
        virtual
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
            {slideContent}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VirtualSwiper;