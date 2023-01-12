import React from "react";

function ActionButton({
    name,
    className,
    onClick,
})
{  
    return (
        <button className={className} onClick={onClick}>{name}</button>
    );
}

export default ActionButton;