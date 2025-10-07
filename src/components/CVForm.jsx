import GeneralInfoForm from "./CVForm/GeneralInfoForm";
import EducationForm from "./CVForm/EducationForm";

function CVForm({ handleGeneralInfoChange, handleSectionChange, generalInfo }) {
  return (
    <div className="cv-form">
      <GeneralInfoForm
        onChange={handleGeneralInfoChange}
        {...generalInfo}
      ></GeneralInfoForm>
      <EducationForm onChange={handleSectionChange}></EducationForm>
    </div>
  );
}

export default CVForm;
