import React, { memo } from "react";

function MenuTextItem({ item }) {
  return (
    <li className={item.itemClassName} id={item.id}>
      <a href={item.ref} className={item.linkClassName} rel="noreferrer">
        {item.name}
      </a>
    </li>
  );
}

export default memo(MenuTextItem);
