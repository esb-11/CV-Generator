import GeneralInfoForm from "./CVForm/GeneralInfoForm";
import FormSection from "./CVForm/FormSection";
import EducationForm from "./CVForm/EducationForm";

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
      <FormSection
        onChange={handleSectionChange}
        array={education}
        Form={EducationForm}
      ></FormSection>
    </div>
  );
}

export default CVForm;
