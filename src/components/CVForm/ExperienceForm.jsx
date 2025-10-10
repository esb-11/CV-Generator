import FormButtons from "./FormButtons";
import InputText from "./InputText";

function ExperienceForm({
  id,
  onChange,
  companyName,
  positionTitle,
  location,
  description,
  startDate,
  endDate,
  onSave,
  onDelete,
}) {
  return (
    <form className="experience-form" onSubmit={(e) => e.preventDefault()}>
      <InputText
        id={"experience-company-name"}
        title={"Company Name"}
        value={companyName}
        onChange={onChange}
        dataKey={"companyName"}
        dataSection={"experience"}
        dataId={id}
      ></InputText>
      <InputText
        id={"experience-position-title"}
        title={"Position Title"}
        value={positionTitle}
        onChange={onChange}
        dataKey={"positionTitle"}
        dataSection={"experience"}
        dataId={id}
      ></InputText>
      <InputText
        id={"experience-location"}
        title={"Location"}
        value={location}
        onChange={onChange}
        dataKey={"location"}
        dataSection={"experience"}
        dataId={id}
      ></InputText>
      <InputText
        id={"experience-description"}
        title={"Description"}
        value={description}
        onChange={onChange}
        dataKey={"description"}
        dataSection={"experience"}
        dataId={id}
      ></InputText>
      <InputText
        id={"experience-start-date"}
        title={"Start Date"}
        value={startDate}
        onChange={onChange}
        dataKey={"startDate"}
        dataSection={"experience"}
        dataId={id}
      ></InputText>
      <InputText
        id={"experience-end-date"}
        title={"End Date"}
        value={endDate}
        onChange={onChange}
        dataKey={"endDate"}
        dataSection={"experience"}
        dataId={id}
      ></InputText>
      <FormButtons onSave={onSave} onDelete={onDelete}></FormButtons>
    </form>
  );
}

export default ExperienceForm;
