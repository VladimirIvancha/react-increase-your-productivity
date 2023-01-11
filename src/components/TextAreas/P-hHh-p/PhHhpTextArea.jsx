import React from "react";

function PhHhpTextArea({ data }) {
  return (
    <article className={data.textAreaClass}>
      <p className={data.p1Class}>{data.p1Text}</p>
      <div className={data.wrapperClass}>
        <h3 className={data.h3Class}>{data.hTexth1}</h3>
        <h2 className={data.h2Class}>{data.hTexth2}</h2>
        <h3 className={data.h3Class}>{data.hTexth3}</h3>
      </div>
      <p className={data.p2Class}>{data.p2Text}</p>
    </article>
  );
}

export default PhHhpTextArea;
