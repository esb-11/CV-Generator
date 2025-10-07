import { useState } from "react";
import EducationForm from "./EducationForm";

function EducationSection({ education, onChange }) {
  const [currentId, setCurrentId] = useState(null);

  const data = education.find((value) => value.id == currentId);

  return (
    <div className="education-section">
      <h2>Education</h2>
      {data && <EducationForm onChange={onChange} {...data}></EducationForm>}
    </div>
  );
}

export default EducationSection;
