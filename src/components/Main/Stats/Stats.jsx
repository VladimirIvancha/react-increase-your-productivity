import React from "react";
import StatsItems from "../../Menus/StatsItems/StatsItems";

function Stats() {
  return (
    <section className="stats">
      <div className="stats__block"></div>
      <div className="stats__block stats__block_greyBlue"></div>
      <StatsItems 
        className={"stats__wrapper"} 
      />
    </section>
  );
}
export default Stats;
