import React from "react";

import { initialBlogData } from "../../../utils/initial-data";
import MenuBlogItem from "../../Items/MenuBlogItem/MenuBlogItem";

import { Virtual, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/virtual";

import "./BlogSwiper.scss";

function BlogSwiper() {
  const slides = initialBlogData.map(
    item => (
      <MenuBlogItem 
        key={item.id} 
        item={item} 
      />
    )
  );

  return (
    <div className="blog__swiper-container">
      <Swiper 
        modules={[Virtual, Pagination, Navigation]} 
        spaceBetween={50}
        slidesPerView={1}
        grabCursor="true"
        slideToClickedSlide="true"
        pagination={{ 
          clickable: true,
        }}
        navigation={{
          nextEl: '.blog__icon-arrow-right',
          prevEl: '.blog__icon-arrow-left',
        }}
        virtual
        className="blogSwiper"
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            {slideContent}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default BlogSwiper;
