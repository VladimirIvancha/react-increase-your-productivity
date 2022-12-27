import React from 'react';
import MenuIconsItem from '../../Items/MenuIcons/MenuIconsItem';
import { initialMenuIconsData } from '../../../utils/initial-data';

function HeaderIconsMenu() {
  return (
    <ul className='headerIconsMenu'>
      {
        initialMenuIconsData.map(item => 
          (
            <MenuIconsItem 
              key={item.id}
              item={item}
            />
          ) 
        )
      }
    </ul>
  );
}
export default HeaderIconsMenu;
