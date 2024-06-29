// If idOverride is not provided, then valueName will be used for the input id
function FormField({ label, valueName, defaultValue, type = 'text', idOverride = null }) {
  const id = idOverride ? idOverride : valueName;

  return (
    <label htmlFor={id}>
      {label}:<input id={id} name={valueName} type={type} defaultValue={defaultValue}></input>
    </label>
  );
}

export default FormField;
