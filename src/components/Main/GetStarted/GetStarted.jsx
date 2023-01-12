import React from "react";
import PhHhpTextArea from "../../TextAreas/P-hHh-p/PhHhpTextArea";
import { getStartedPhHhpTextArea } from "../../../utils/initial-data";
import ActionButton from "../../Buttons/Action/ActionButton";
import PageLine from "../../Shapes/Lines/PageLine";

function GetStarted() {
  return (
    <section className="getStarted">
      <div className="getStarted__container">
        <PhHhpTextArea data={getStartedPhHhpTextArea} />
        <div className="getStarted__wrapper">
          <ActionButton
            name={"View pricing"}
            className={"getStarted__btn getStarted__btn_bgWhite"}
          />
          <ActionButton
            name={"Read documentation"}
            className={"getStarted__btn"}
          />
        </div>
      </div>
      <PageLine id={"getStarted-pageLine"} />
    </section>
  );
}

export default GetStarted;
