import React from "react";
import PTextArea from "../../TextAreas/P/PTextArea";

function MenuQuotesItem({
    item,
})
{  
    return (
        <li className={item.mainClassName} id={item.id}>
            <PTextArea
                data={item}
            />
            <div className={item.quotePerson}></div>
        </li>
    );
}
  
export default MenuQuotesItem;