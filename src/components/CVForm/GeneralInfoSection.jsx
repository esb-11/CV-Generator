import InputText from "./InputText";

function GeneralInfoSection({ name, email, phoneNumber, address, onChange }) {
  return (
    <form className="general-info">
      <h2>General Information</h2>
      <InputText
        id={"cv-name"}
        title={"Name"}
        value={name}
        onChange={onChange}
        dataKey={"name"}
      ></InputText>
      <InputText
        id={"cv-email"}
        title={"Email"}
        value={email}
        onChange={onChange}
        dataKey={"email"}
      ></InputText>
      <InputText
        id={"cv-phone-number"}
        title={"Phone number"}
        value={phoneNumber}
        onChange={onChange}
        dataKey={"phoneNumber"}
      ></InputText>
      <InputText
        id={"cv-address"}
        title={"Address"}
        value={address}
        onChange={onChange}
        dataKey={"address"}
      ></InputText>
    </form>
  );
}

export default GeneralInfoSection;
