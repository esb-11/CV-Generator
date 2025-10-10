import CollapsedForm from "./CollapsedForm";
import AddButton from "./AddButton";

function SectionList({ array, onClick, titleKey, title, onAdd }) {
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
      <AddButton title={title} onClick={onAdd}></AddButton>
    </div>
  );
}

export default SectionList;
