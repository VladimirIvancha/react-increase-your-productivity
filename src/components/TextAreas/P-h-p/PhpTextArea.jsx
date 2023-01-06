import React from "react";

function PhpTextArea({ data }) {
  return (
    <article className={data.textAreaClass}>
      <p className={data.p1Class}>{data.p1Text}</p>
      <h2 className={data.hClass}>{data.hText}</h2>
      <p className={data.p2Class}>{data.p2Text}</p>
    </article>
  );
}

export default PhpTextArea;
