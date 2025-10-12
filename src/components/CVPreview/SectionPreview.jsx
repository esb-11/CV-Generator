function SectionPreview({ title, array, Preview }) {
  return (
    <div className="section-preview">
      <h2>{title}</h2>
      {array.map((value) => (
        <Preview key={value.id} {...value}></Preview>
      ))}
    </div>
  );
}

export default SectionPreview;
