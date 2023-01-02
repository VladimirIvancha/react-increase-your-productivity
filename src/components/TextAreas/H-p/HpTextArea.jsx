function HpTextArea({ data }) {
    return (
      <article className={data.textAreaClass}>
        <h2 className={data.hClass}>{data.hText}</h2>
        <p className={data.p1Class}>{data.p1Text}</p>
      </article>
    );
}
  
export default HpTextArea;