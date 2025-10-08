import { useState } from "react";
import EducationForm from "./EducationForm";
import FormSection from "./FormSection";

function EducationSection({ education, onChange }) {
  const [currentId, setCurrentId] = useState(null);
  const data = education.find((value) => value.id == currentId);

  function handleClick(e) {
    const { id } = e.target.dataset;
    setCurrentId(id);
  }

  return (
    <div className="education-section">
      <h2>Education</h2>
      {data && <EducationForm onChange={onChange} {...data}></EducationForm>}
      {!data && <FormSection array={education} onClick={handleClick} titleKey={"degree"}></FormSection>}
    </div>
  );
}

export default EducationSection;
