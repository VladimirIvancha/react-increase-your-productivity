function PhpTextArea({ data }) {
  return (
    <article className={data.textAreaClass}>
      <p className={data.p1Class}>{data.p1Text}</p>
      <h1 className={data.hClass}>{data.hText}</h1>
      <p className={data.p2Class}>{data.p2Text}</p>
    </article>
  );
}

export default PhpTextArea;
