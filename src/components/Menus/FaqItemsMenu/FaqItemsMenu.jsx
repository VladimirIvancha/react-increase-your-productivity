import React from "react";
import MenuFaqItem from "../../Items/MenuFaqItem/MenuFaqItem";
import { initialMenuFaqData } from '../../../utils/initial-data';

function FaqItemsMenu({className}) {
  return (
    <ul className={className}>
      {
        initialMenuFaqData.map(item => 
          (
            <MenuFaqItem 
              key={item.id}
              item={item}
            />
          ) 
        )
      }
    </ul>
  );
}
export default FaqItemsMenu;