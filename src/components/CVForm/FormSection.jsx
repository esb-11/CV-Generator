import { useState } from "react";
import SectionList from "./SectionList";

function FormSection({
  array,
  onChange,
  Form,
  formName,
  title,
  titleKey,
  addForm,
  deleteForm,
}) {
  const [currentId, setCurrentId] = useState(null);
  const data = array.find((value) => value.id == currentId);

  function handleClick(e) {
    const { id } = e.target.dataset;
    setCurrentId(id);
  }

  function handleAdd() {
    const id = addForm();
    setCurrentId(id);
  }

  function handleSave() {
    setCurrentId(null);
  }

  function handleDelete() {
    deleteForm(currentId, formName);
  }

  return (
    <div className="form-section">
      <h2>{title}</h2>
      {data && (
        <Form
          onChange={onChange}
          setCurrentId={setCurrentId}
          {...data}
          onDelete={handleDelete}
          onSave={handleSave}
        ></Form>
      )}
      {!data && (
        <SectionList
          array={array}
          onClick={handleClick}
          titleKey={titleKey}
          title={title}
          onAdd={handleAdd}
        ></SectionList>
      )}
    </div>
  );
}

export default FormSection;
