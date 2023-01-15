import React, { memo } from "react";

function PlayButton({ className, insideClassName, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      <div className={insideClassName}></div>
    </button>
  );
}

export default memo(PlayButton);
