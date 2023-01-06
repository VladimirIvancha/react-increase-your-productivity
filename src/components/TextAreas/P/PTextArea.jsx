import React from "react";

function PTextArea({ data }) {
    return (
      <article className={data.textAreaClass}>
        <p className={data.p1Class}>{data.p1Text}</p>
      </article>
    );
}
  
export default PTextArea;