import CollapsedForm from "./CollapsedForm";

function SectionList({ array, onClick, titleKey }) {
  return (
    <div className="section-list">
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

export default SectionList;
