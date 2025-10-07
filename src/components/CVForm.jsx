import GeneralInfoForm from "./CVForm/GeneralInfoForm";
import EducationSection from "./CVForm/EducationSection";

function CVForm({
  handleGeneralInfoChange,
  handleSectionChange,
  generalInfo,
  education,
}) {
  return (
    <div className="cv-form">
      <GeneralInfoForm
        onChange={handleGeneralInfoChange}
        {...generalInfo}
      ></GeneralInfoForm>
      <EducationSection
        onChange={handleSectionChange}
        education={education}
      ></EducationSection>
    </div>
  );
}

export default CVForm;
