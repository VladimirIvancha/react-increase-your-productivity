import React from "react";

import { initialQuotesData } from "../../../utils/initial-data";
import MenuQuotesItem from "../../Items/MenuQuotesItem/MenuQuotesItem";

import { Virtual, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/virtual";

import "./QuotesSwiper.scss";

function QuotesSwiper() {
  const slides = initialQuotesData.map(
    item => (
      <MenuQuotesItem 
        key={item.id}
        item={item}
      />
    ) 
  );

  return (
    <div className="quotes__swiper-container">
      <Swiper 
        modules={[Virtual, Pagination]} 
        spaceBetween={50}
        slidesPerView={2}
        grabCursor="true"
        slideToClickedSlide="true"
        pagination={{ clickable: true}}
        virtual
        className="quotesSwiper"
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            {slideContent}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default QuotesSwiper;
