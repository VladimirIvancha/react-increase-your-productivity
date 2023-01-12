import React from "react";
import StatsItems from "../../Menus/StatsItems/StatsItems";
import PageLine from "../../Shapes/Lines/PageLine";

function Stats() {
  return (
    <section className="stats">
      <div className="stats__container">
        <div className="stats__block"></div>
        <div className="stats__block stats__block_greyBlue"></div>
        <StatsItems className={"stats__wrapper"} />
      </div>
      <PageLine id={"stats-pageLine"} />
    </section>
  );
}
export default Stats;
