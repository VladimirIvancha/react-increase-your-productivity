import React from "react";
import PTextArea from "../../TextAreas/P/PTextArea";

function MenuQuotesItem({
    item,
})
{  
    return (
        <li className={item.containerClassName} id={item.id}>
            <div className={item.mainClassName}>
                <PTextArea
                    data={item}
                />
            </div>
            <div className={item.quotePerson}></div>
        </li>
    );
}
  
export default MenuQuotesItem;