import React, {useContext} from "react";
import PhHhpTextArea from "../../TextAreas/P-hHh-p/PhHhpTextArea";
import { getStartedPhHhpTextArea } from "../../../utils/initial-data";
import ActionButton from "../../Buttons/Action/ActionButton";
import PageLine from "../../Shapes/Lines/PageLine";
import InfoPopupContext from "../../../contexts/InfoPopupContext";

function GetStarted() {
  const { setInfoPopupOpen } = useContext(InfoPopupContext);

  function handleBtnClick() {
    setInfoPopupOpen(true);
  }

  return (
    <section className="getStarted">
      <div className="getStarted__container">
        <PhHhpTextArea data={getStartedPhHhpTextArea} />
        <div className="getStarted__wrapper">
          <ActionButton
            name={"View pricing"}
            className={"getStarted__btn getStarted__btn_bgWhite"}
            onClick={handleBtnClick}
          />
          <ActionButton
            name={"Read documentation"}
            className={"getStarted__btn"}
            onClick={handleBtnClick}
          />
        </div>
      </div>
      <PageLine id={"getStarted-pageLine"} />
    </section>
  );
}

export default GetStarted;
