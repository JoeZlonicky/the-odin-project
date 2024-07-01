import FormField from './FormField';
import FormSection from './FormSection';
import FormTextArea from './FormTextArea';
import TrayContainer from './TrayContainer';
import '../style/InfoForm.css';

function InfoForm({ initialInfo, setInfo, setIsEditing }) {
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const newInfo = {};
    for (const [key, value] of formData.entries()) {
      newInfo[key] = value;
    }

    setInfo(newInfo);
    setIsEditing(false);
  }

  return (
    <form method="post" onSubmit={handleSubmit} className="info-form">
      <FormSection title={'General Information'} index={1}>
        <FormField label="Name (Required)" valueName={'name'} defaultValue={initialInfo.name} isRequired={true} />
        <FormField label="Email (Required)" valueName={'email'} defaultValue={initialInfo.email} isRequired={true} />
        <FormField
          label="Phone Number (Required)"
          valueName={'phoneNumber'}
          defaultValue={initialInfo.phoneNumber}
          isRequired={true}
        />
        <FormField label="Website" valueName={'website'} defaultValue={initialInfo.website} />
      </FormSection>

      <FormSection title={'Education'} index={2}>
        <FormField label="Certification" valueName={'certification'} defaultValue={initialInfo.certification} />
        <FormField label="School Name" valueName={'schoolName'} defaultValue={initialInfo.schoolName} />
        <FormField label="Start Date" valueName={'educationStart'} defaultValue={initialInfo.educationStart} />
        <FormField label="Graduation Date" valueName={'educationEnd'} defaultValue={initialInfo.educationEnd} />
      </FormSection>

      <FormSection title={'Work Experience'} index={3}>
        <FormField label="Position Title" valueName={'positionTitle'} defaultValue={initialInfo.positionTitle} />
        <FormField label="Company Name" valueName={'companyName'} defaultValue={initialInfo.companyName} />
        <FormField label="Start Date" valueName={'workStart'} defaultValue={initialInfo.workStart} />
        <FormField label="End Date" valueName={'workEnd'} defaultValue={initialInfo.workEnd} />
        <FormTextArea label="Description" valueName={'workDescription'} defaultValue={initialInfo.workDescription} />
      </FormSection>

      <TrayContainer>
        <button type="submit">Generate</button>
      </TrayContainer>
    </form>
  );
}

export default InfoForm;
