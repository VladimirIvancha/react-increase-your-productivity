import React from "react";
import MenuTextItem from '../../Items/MenuText/MenuTextItem';
import { initialMenuItemsData } from '../../../utils/initial-data';

function HeaderTextMenu() {
  return (
    <ul className='headerTextMenu'>
      {
        initialMenuItemsData.map(item => 
          (
            <MenuTextItem 
              key={item.id}
              item={item}
            />
          ) 
        )
      }
    </ul>
  );
}
export default HeaderTextMenu;
