import InputText from "./InputText";

function EducationForm({ onChange, school, degree, startDate, endDate }) {
  return (
    <form className="education-form">
      <h2>Education</h2>
      <InputText
        id={"education-school"}
        title={"School"}
        value={school}
        onChange={onChange}
        dataKey={"school"}
        dataSection={"education"}
      ></InputText>
      <InputText
        id={"education-degree"}
        title={"Degree"}
        value={degree}
        onChange={onChange}
        dataKey={"degree"}
        dataSection={"education"}
      ></InputText>
      <InputText
        id={"education-start-date"}
        title={"Start Date"}
        value={startDate}
        onChange={onChange}
        dataKey={"start"}
        dataSection={"education"}
      ></InputText>
      <InputText
        id={"education-end-date"}
        title={"End Date"}
        value={endDate}
        onChange={onChange}
        dataKey={"end"}
        dataSection={"education"}
      ></InputText>
    </form>
  );
}

export default EducationForm;
