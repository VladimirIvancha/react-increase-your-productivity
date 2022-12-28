import React, { memo } from "react";

function ActionButton({
    name,
    className,
})
{  
    return (
        <button className={className}>{name}</button>
    );
}

export default memo(ActionButton);