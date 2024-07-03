import '../../../style/info-form/FormField.css';
import '../../../style/info-form/FormTextArea.css';

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
