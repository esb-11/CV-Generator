import { useState } from "react";
import SectionList from "./SectionList";

function FormSection({ array, onChange, Form, formName, titleKey, addForm }) {
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

  return (
    <div className="form-section">
      <h2>{formName}</h2>
      {data && <Form onChange={onChange} {...data}></Form>}
      {!data && (
        <SectionList
          array={array}
          onClick={handleClick}
          titleKey={titleKey}
          formName={formName}
          onAdd={handleAdd}
        ></SectionList>
      )}
    </div>
  );
}

export default FormSection;
