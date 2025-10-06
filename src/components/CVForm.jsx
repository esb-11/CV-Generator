import GeneralInfoForm from "./CVForm/GeneralInfoForm";

function CVForm({ handleGeneralInfoChange, handleSectionChange }) {
  return (
    <>
      <GeneralInfoForm onChange={handleGeneralInfoChange}></GeneralInfoForm>
    </>
  );
}

export default CVForm;
