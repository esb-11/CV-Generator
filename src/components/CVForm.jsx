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
  deleteForm,
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
        formName={"education"}
        title={"Education"}
        titleKey={"degree"}
        addForm={addEducation}
        deleteForm={deleteForm}
      ></FormSection>
      <FormSection
        onChange={handleSectionChange}
        array={experience}
        Form={ExperienceForm}
        formName={"experience"}
        title={"Experience"}
        titleKey={"positionTitle"}
        addForm={addExperience}
        deleteForm={deleteForm}
      ></FormSection>
    </div>
  );
}

export default CVForm;
