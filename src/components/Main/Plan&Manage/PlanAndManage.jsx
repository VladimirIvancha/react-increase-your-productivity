import React, {useContext} from "react";
import PhpTextArea from "../../TextAreas/P-h-p/PhpTextArea";
import ActionButton from "../../Buttons/Action/ActionButton";
import VideoButton from "../../Buttons/Video/VideoButton";
import { planAndManagePhpTextArea } from "../../../utils/initial-data";
import PageLine from "../../Shapes/Lines/PageLine";
import InfoPopupContext from "../../../contexts/InfoPopupContext";
import VideoPopupContext from "../../../contexts/VideoPopupContext";

function PlanAndManage() {
  const { setInfoPopupOpen } = useContext(InfoPopupContext);
  const { setVideoPopupOpen } = useContext(VideoPopupContext);

  function handleBtnClick() {
    setInfoPopupOpen(true);
  }

  function handleVideoBtnClick() {
    setVideoPopupOpen(true);
  }

  return (
    <section className="planAndManage" id="planAndManage">
      <div className="planAndManage__wrapper planAndManage__wrapper_main">
        <div className="planAndManage__wrapper planAndManage__wrapper_info">
          <PhpTextArea 
            data={planAndManagePhpTextArea} 
          />
          <div className="planAndManage__wrapper planAndManage__wrapper_buttons">
            <VideoButton
              name={'View video'}
              className={'planAndManage__videoButton'}
              iconClassName={'videoButton__play-icon'}
              onClick={handleVideoBtnClick}
            />
            <ActionButton
              name={'See features'}
              className={'planAndManage__actionButton'}
              onClick={handleBtnClick}
            />
          </div>
        </div>
        <div className="planAndManage__illustration">
          <div className="planAndManage__illustration-main"></div>
          <div className="planAndManage__illustration-search"></div>
          <div className="planAndManage__illustration-events"></div>
        </div>
      </div>
      <PageLine id={"planAndManage-pageLine"} />
    </section>
  );
}
export default PlanAndManage;
