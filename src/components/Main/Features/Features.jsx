import React, {useContext} from "react";
import PhTextArea from "../../TextAreas/P-h/PhTextArea";
import { featuresPhTextArea } from "../../../utils/initial-data";
import FeaturesItems from "../../Menus/FeaturesItems/FeaturesItems";
import ActionButton from "../../Buttons/Action/ActionButton";
import PageLine from "../../Shapes/Lines/PageLine";
import InfoPopupContext from "../../../contexts/InfoPopupContext";

function Features() {
  const { setInfoPopupOpen } = useContext(InfoPopupContext);

  function handleBtnClick() {
    setInfoPopupOpen(true);
  }

  return (
    <section className="features">
      <div className="features__container">
        <PhTextArea data={featuresPhTextArea} />
        <FeaturesItems className={"features__wrapper"} />
        <div className="features__wrapper features__wrapper_buttons">
          <ActionButton
            name={"Read more"}
            className={"features__actionButton features__actionButton_red"}
            onClick={handleBtnClick}
          />
          <div className="features__wrapper features__wrapper_text">
            <div className="features__line"></div>
            <p className="features__text">or</p>
            <div className="features__line"></div>
          </div>
          <ActionButton
            name={"Get started"}
            className={"features__actionButton features__actionButton_blue"}
            onClick={handleBtnClick}
          />
        </div>
      </div>
      <PageLine id={"features-pageLine"} />
    </section>
  );
}
export default Features;
