function CollapsedForm({ onClick, title, dataId }) {
  return (
    <button className="collapsed-form">
      <h5 onClick={onClick} data-id={dataId}>
        {title}
      </h5>
    </button>
  );
}

export default CollapsedForm;
