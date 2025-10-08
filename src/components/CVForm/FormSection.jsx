import CollapsedForm from "./CollapsedForm";

function FormSection({ array, onClick, titleKey }) {
  return (
    <div className="form-section">
      {array.map((value) => (
        <CollapsedForm
          title={value[titleKey]}
          onClick={onClick}
          dataId={value.id}
          key={value.id}
        ></CollapsedForm>
      ))}
    </div>
  );
}

export default FormSection;
