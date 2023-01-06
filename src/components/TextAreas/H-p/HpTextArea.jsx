import React from "react";

function HpTextArea({ data }) {
    return (
      <article className={data.textAreaClass}>
        <h2 className={data.hClass}>{data.hText}</h2>
        <p className={data.pClass}>{data.pText}</p>
      </article>
    );
}
  
export default HpTextArea;