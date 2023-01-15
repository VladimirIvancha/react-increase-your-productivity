import React from "react";

import { initialBlogData } from "../../../utils/initial-data";
import MenuBlogItem from "../../Items/MenuBlogItem/MenuBlogItem";

import { Virtual, Pagination } from 'swiper';
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
    <div className="blogSwiper__container">
      <Swiper 
        modules={[Virtual, Pagination]} 
        spaceBetween={50}
        slidesPerView={1}
        grabCursor="true"
        slideToClickedSlide="true"
        pagination={{ clickable: true}}
        virtual
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
