import React from "react";
import FigureButton from "../../Buttons/Figure/FigureButton";
import PhTextArea from "../../TextAreas/P-h/PhTextArea";
import { blogPhTextArea } from "../../../utils/initial-data";
import PageLine from "../../Shapes/Lines/PageLine";
import BlogSwiper from "../../Swiper/BlogSwiper/BlogSwiper";

function Blog() {
  return (
    <section className="blog" id="blog">
      <div className="blog__container">
        <PhTextArea data={blogPhTextArea} />
        <div className="blog__wrapper blog__wrapper_parent">
          <FigureButton className={"blog__icon-arrow-left"} />
          <BlogSwiper />
          <FigureButton className={"blog__icon-arrow-right"} />
        </div>
      </div>
      <PageLine id={"blog-pageLine"} />
    </section>
  );
}
export default Blog;
