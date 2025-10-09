import GeneralInfoForm from "./CVForm/GeneralInfoForm";
import FormSection from "./CVForm/FormSection";
import EducationForm from "./CVForm/EducationForm";
import ExperienceForm from "./CVForm/ExperienceForm";

function CVForm({
  handleGeneralInfoChange,
  handleSectionChange,
  generalInfo,
  education,
  experience,
  addEducation,
  addExperience,
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
        formName={"Education"}
        titleKey={"degree"}
        addForm={addEducation}
      ></FormSection>
      <FormSection
        onChange={handleSectionChange}
        array={experience}
        Form={ExperienceForm}
        formName={"Experience"}
        titleKey={"positionTitle"}
        addForm={addExperience}
      ></FormSection>
    </div>
  );
}

export default CVForm;
