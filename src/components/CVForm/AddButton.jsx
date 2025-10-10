function AddButton({ onClick, title }) {
  return (
    <div className="add-form">
      <button onClick={onClick}>
        <h4>Add {title}</h4>
      </button>
    </div>
  );
}

export default AddButton;
