function FormButtons({ onSave, onDelete }) {
  return (
    <div className="form-buttons">
      <button className="save-button" onClick={onSave}>
        Save
      </button>
      <button className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}

export default FormButtons;
