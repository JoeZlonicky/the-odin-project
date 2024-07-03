import '../../../style/info-form/FormSection.css';

function StaticFormSection({ title, index, children }) {
  return (
    <section className="form-section">
      <h2>
        {index}. {title}
      </h2>
      <div className="form-section__field-container">{children}</div>
    </section>
  );
}

export default StaticFormSection;
