import ActionButton from "../../Buttons/Action/ActionButton";
import FigureButton from "../../Buttons/Figure/FigureButton";
import HpTextArea from "../../TextAreas/H-p/HpTextArea";
import PhTextArea from "../../TextAreas/P-h/PhTextArea";
import CircleSet from "../../Sets/Circle/CircleSet";
import { blogPhTextArea, blogHpTextArea } from "../../../utils/initial-data";

function Blog() {
  return (
    <section className="blog">
      <PhTextArea data={blogPhTextArea} />
      <div className="blog__wrapper">
        <FigureButton className={"blog__icon-arrow-left"} />
        <div className="blog__wrapper">
          <div className="blog__pic blog__pic_main">
            <div className="blog__search-icon"></div>
          </div>
          <div className="blog__wrapper blog__wrapper_vertical">
            <div className="blog__pic blog__pic_table"></div>
            <div className="blog__pic blog__pic_man"></div>
          </div>
          <div className="blog__wrapper blog__wrapper_vertical">
            <HpTextArea data={blogHpTextArea} />
            <div className="blog__wrapper">
              <ActionButton name={"Read now"} className={"blog__btn"} />
              <ActionButton
                name={"Add to your bookmarks"}
                className={"blog__btn blog__btn_white"}
              />
            </div>
          </div>
        </div>
        <FigureButton className={"blog__icon-arrow-right"} />
      </div>
      <CircleSet 
        number={3}
        setClassName={'blog__circleSet'}
        itemClassName={'blog__circleSet-item'}
      />
    </section>
  );
}
export default Blog;
