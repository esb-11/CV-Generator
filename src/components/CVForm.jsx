import GeneralInfoSection from "./CVForm/GeneralInfoSection";

function CVForm({ onChange }) {
  return (
    <>
      <GeneralInfoSection onChange={onChange}></GeneralInfoSection>
    </>
  );
}

export default CVForm;
