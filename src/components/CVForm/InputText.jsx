function InputText({ id, title, value, dataKey, onChange }) {
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
        />
      </label>
    </>
  );
}

export default InputText;
