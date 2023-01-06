import React from "react";
import MenuQuotesItem from "../../Items/MenuQuotesItem/MenuQuotesItem";
import { initialQuotesData } from "../../../utils/initial-data";

function QuotesItemsMenu({className}) {
  return (
    <ul className={className}>
      {
        initialQuotesData.map(item => 
          (
            <MenuQuotesItem 
              key={item.id}
              item={item}
            />
          ) 
        )
      }
    </ul>
  );
}
export default QuotesItemsMenu;