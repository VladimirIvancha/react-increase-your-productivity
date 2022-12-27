import React, { memo } from "react";

function ActionButton({
    name,
})
{  
    return (
        <button className="actionButton">{name}</button>
    );
}

export default memo(ActionButton);