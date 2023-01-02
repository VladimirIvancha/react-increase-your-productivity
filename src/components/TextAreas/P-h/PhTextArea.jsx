function PhTextArea({ data }) {
    return (
      <article className={data.textAreaClass}>
        <p className={data.p1Class}>{data.p1Text}</p>
        <h2 className={data.hClass}>{data.hText}</h2>
      </article>
    );
}
  
export default PhTextArea;