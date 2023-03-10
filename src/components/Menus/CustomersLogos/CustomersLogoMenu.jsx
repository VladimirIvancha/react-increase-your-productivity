import React from "react";
import MenuLogoItem from "../../Items/MenuLogo/MenuLogoItem";
import { initialMenuLogoData } from "../../../utils/initial-data";

function CustomersLogoMenu() {
    return (
      <ul className='customers__logoMenu'>
        {
          initialMenuLogoData.map(item => 
            (
              <MenuLogoItem 
                key={item.id}
                item={item}
              />
            ) 
          )
        }
      </ul>
    );
  }
  export default CustomersLogoMenu;