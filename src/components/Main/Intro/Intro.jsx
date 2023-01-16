import React, { useContext } from "react";
import PlayButton from "../../Buttons/Play/PlayButton";
import CircleShape from "../../Shapes/Circle/CircleShape";
import PhpTextArea from "../../TextAreas/P-h-p/PhpTextArea";
import { introPhpTextArea } from "../../../utils/initial-data";
import PageLine from "../../Shapes/Lines/PageLine";
import VideoPopupContext from "../../../contexts/VideoPopupContext";

function Intro() {
  const { setVideoPopupOpen } = useContext(VideoPopupContext);

  function handleBtnClick() {
    setVideoPopupOpen(true);
  }

  return (
    <section className="intro" id="intro">
      <div className="intro__container">
        <PhpTextArea data={introPhpTextArea} />
        <PlayButton
          className={"intro__playBtn-shape"}
          insideClassName={"intro__playBtn-playIcon"}
          onClick={handleBtnClick}
        />
        <div className="intro__ellipse"></div>
        <div className="intro__chart">
          <div className="intro__one-of-stats"></div>
          <CircleShape className={"intro__circle-shape"} />
        </div>
      </div>
      <PageLine id={"intro-pageLine"} />
    </section>
  );
}
export default Intro;
