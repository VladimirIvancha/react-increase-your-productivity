import React from "react";
import MenuStatsItem from '../../Items/MenuStats/MenuStatsItem';
import { initialStatsData } from '../../../utils/initial-data';

function StatsItems({className}) {
  return (
    <ul className={className}>
      {
        initialStatsData.map(item => 
          (
            <MenuStatsItem 
              key={item.id}
              item={item}
            />
          ) 
        )
      }
    </ul>
  );
}
export default StatsItems;