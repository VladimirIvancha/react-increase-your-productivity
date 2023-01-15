import React, { useContext } from "react";
import ActionButton from "../../Buttons/Action/ActionButton";
import HpTextArea from "../../TextAreas/H-p/HpTextArea";
import InfoPopupContext from "../../../contexts/InfoPopupContext";

function MenuBlogItem({ 
  item, 
}) 
{
  const { setInfoPopupOpen } = useContext(InfoPopupContext);

  function handleBtnClick() {
    setInfoPopupOpen(true);
  }

  return (
    <li className='blog__item-container' id={item.id}>
      <div className="blog__wrapper blog__wrapper_main">
        <div className={item.pic1ClassName}>
          <div className="blog__search-icon"></div>
        </div>
        <div className="blog__wrapper blog__wrapper_vertical-pics">
          <div className={item.pic2ClassName}></div>
          <div className={item.pic3ClassName}></div>
        </div>
        <div className="blog__wrapper blog__wrapper_vertical-text">
          <HpTextArea data={item} />
          <div className="blog__wrapper blog__wrapper_buttons">
            <ActionButton
              name={"Read now"}
              className={"blog__btn"}
              onClick={handleBtnClick}
            />
            <ActionButton
              name={"Add to your bookmarks"}
              className={"blog__btn blog__btn_white"}
              onClick={handleBtnClick}
            />
          </div>
        </div>
      </div>
    </li>
  );
}

export default MenuBlogItem;
