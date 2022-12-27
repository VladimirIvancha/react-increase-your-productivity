import React, { memo } from "react";

function MenuIconsItem({
  item,
})
{  
    return (
        <a href={item.ref} target="_blank" rel="noreferrer">
            <img id={item.id} className="menuIconsItem" src={item.url} alt={item.alt}/>
        </a>
        
    );
}

export default memo(MenuIconsItem);