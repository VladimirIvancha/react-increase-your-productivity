import React from "react";
import PlayButton from "../../Buttons/Play/PlayButton";
import CircleShape from "../../Shapes/Circle/CircleShape";
import CircleSet from "../../Sets/Circle/CircleSet";
import PhpTextArea from "../../TextAreas/P-h-p/PhpTextArea";
import { introPhpTextArea } from "../../../utils/initial-data";
import PageLine from "../../Shapes/Lines/PageLine";

function Intro() {
  return (
    <section className="intro">
      <div className="intro__container">
        <PhpTextArea data={introPhpTextArea} />
        <PlayButton
          className={"playButton__shape"}
          insideClassName={"playButton__play-icon"}
        />
        <CircleSet
          number={3}
          setClassName={"intro__circleSet"}
          itemClassName={"intro__circleSet-item"}
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
