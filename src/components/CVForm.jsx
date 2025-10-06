import GeneralInfoForm from "./CVForm/GeneralInfoForm";

function CVForm({ onChange }) {
  return (
    <>
      <GeneralInfoForm onChange={onChange}></GeneralInfoForm>
    </>
  );
}

export default CVForm;
