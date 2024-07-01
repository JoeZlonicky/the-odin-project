import { Fragment } from 'react';
import '../style/DynamicFormSection.css';

// Creates a form container for each data element and uses the childGenerator/keyGenerator to populate it
// onAdd: () => ...
// onRemove: (data) => ...
function DynamicFormSection({ title, index, dataList, childGenerator, keyGenerator, onAdd, onRemove }) {
  return (
    <section className="form-section">
      <h2>
        {index}. {title}
      </h2>
      {dataList.map((data) => (
        <Fragment key={keyGenerator(data)}>
          <div className="form-section__field-container">{childGenerator(data)}</div>
          <button
            className="dynamic-form-section__button dynamic-form-section__remove-button"
            type="button"
            onClick={() => onRemove(data)}
          >
            Remove
          </button>
          <hr className="dynamic-form-section__divider"></hr>
        </Fragment>
      ))}

      <button
        className="dynamic-form-section__button dynamic-form-section__add-button"
        type="button"
        onClick={() => onAdd()}
      >
        Add
      </button>
    </section>
  );
}

export default DynamicFormSection;
