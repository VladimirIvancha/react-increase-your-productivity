import React, { memo } from "react";

function MenuTextItem({
  item,
})
{  
    return (
      <li className="menuTextItem" id={item.id}>
        {item.name}
      </li>
    );
}

export default memo(MenuTextItem);