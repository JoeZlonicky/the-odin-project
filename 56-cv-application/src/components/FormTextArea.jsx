import '../style/FormField.css';
import '../style/FormTextArea.css';

// If idOverride is not provided, then valueName will be used for the input id
function FormTextArea({ label, valueName, defaultValue, idOverride = null }) {
  const id = idOverride ? idOverride : valueName;

  return (
    <div className="form-field">
      <label htmlFor={id}>{label}:</label>
      <textarea id={id} name={valueName} defaultValue={defaultValue} className="form-text-area"></textarea>
    </div>
  );
}

export default FormTextArea;
