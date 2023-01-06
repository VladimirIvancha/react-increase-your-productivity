import React from "react";

function VideoButton({
    name,
    className,
    iconClassName,
})
{  
    return (
        <button className={className}>
            {name}
            <div className={iconClassName}></div>
        </button>
    );
}

export default VideoButton;