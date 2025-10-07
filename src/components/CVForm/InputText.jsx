function InputText({ id, title, value, dataKey, dataSection, onChange }) {  
  return (
    <>
      <label htmlFor={id}>
        <h3>{title}</h3>
        <input
          type="text"
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          data-key={dataKey}
          data-section={dataSection}
        />
      </label>
    </>
  );
}

export default InputText;
