import React, { useContext } from "react";
import HpTextArea from "../../TextAreas/H-p/HpTextArea";
import InfoPopupContext from "../../../contexts/InfoPopupContext";

function MenuFeatureItem({ item }) {
  const { setInfoPopupOpen } = useContext(InfoPopupContext);

  function handleBtnClick() {
    setInfoPopupOpen(true);
  }

  return (
    <li className={item.mainClassName} id={item.id} onClick={handleBtnClick}>
      <div className={item.figureClassName}></div>
      <HpTextArea data={item} />
    </li>
  );
}

export default MenuFeatureItem;
