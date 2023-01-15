import React from "react";

function VideoButton({ name, className, iconClassName, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {name}
      <div className={iconClassName}></div>
    </button>
  );
}

export default VideoButton;
