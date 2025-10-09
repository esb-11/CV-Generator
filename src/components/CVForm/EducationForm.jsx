import FormButtons from "./FormButtons";
import InputText from "./InputText";

function EducationForm({
  onChange,
  id,
  schoolName,
  degree,
  startDate,
  endDate,
}) {
  return (
    <form className="education-form" onSubmit={(e) => e.preventDefault()}>
      <InputText
        id={"education-school"}
        title={"School"}
        value={schoolName}
        onChange={onChange}
        dataKey={"schoolName"}
        dataSection={"education"}
        dataId={id}
      ></InputText>
      <InputText
        id={"education-degree"}
        title={"Degree"}
        value={degree}
        onChange={onChange}
        dataKey={"degree"}
        dataSection={"education"}
        dataId={id}
      ></InputText>
      <InputText
        id={"education-start-date"}
        title={"Start Date"}
        value={startDate}
        onChange={onChange}
        dataKey={"startDate"}
        dataSection={"education"}
        dataId={id}
      ></InputText>
      <InputText
        id={"education-end-date"}
        title={"End Date"}
        value={endDate}
        onChange={onChange}
        dataKey={"endDate"}
        dataSection={"education"}
        dataId={id}
      ></InputText>
      <FormButtons></FormButtons>
    </form>
  );
}

export default EducationForm;
