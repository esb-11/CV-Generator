function AddButton({ onClick, formName }) {
  return (
    <div className="add-form">
      <button onClick={onClick}>
        <h4>Add {formName}</h4>
      </button>
    </div>
  );
}

export default AddButton;
