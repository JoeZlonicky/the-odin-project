import '../style/FormField.css';

// If idOverride is not provided, then valueName will be used for the input id
function FormField({ label, valueName, defaultValue, type = 'text', idOverride = null, isRequired = false }) {
  const id = idOverride ? idOverride : valueName;

  return (
    <div className="form-field">
      <label htmlFor={id}>{label}:</label>
      <input id={id} name={valueName} type={type} defaultValue={defaultValue} required={isRequired}></input>
    </div>
  );
}

export default FormField;
