import React, { memo } from "react";

function PlayButton({
    className,
    insideClassName,
})
{  
    return (
        <button className={className}>
            <div className={insideClassName}></div>
        </button>
    );
}

export default memo(PlayButton);