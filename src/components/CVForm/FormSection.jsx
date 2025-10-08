import { useState } from "react";
import SectionList from "./SectionList";

function FormSection({ array, onChange, Form }) {
  const [currentId, setCurrentId] = useState(null);
  const data = array.find((value) => value.id == currentId);

  function handleClick(e) {
    const { id } = e.target.dataset;
    setCurrentId(id);
  }

  return (
    <div className="education-section">
      <h2>Education</h2>
      {data && <Form onChange={onChange} {...data}></Form>}
      {!data && (
        <SectionList
          array={array}
          onClick={handleClick}
          titleKey={"degree"}
        ></SectionList>
      )}
    </div>
  );
}

export default FormSection;
