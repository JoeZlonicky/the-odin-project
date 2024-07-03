import FormField from '../form-components/FormField';
import StaticFormSection from '../form-components/StaticFormSection';

function GeneralInformationFormSection({ initialName, initialEmail, initialPhoneNumber, initialWebsite }) {
  return (
    <StaticFormSection title={'General Information'} index={1}>
      <FormField label="Name (Required)" valueName={'name'} defaultValue={initialName} isRequired={true} />
      <FormField label="Email" valueName={'email'} defaultValue={initialEmail} />
      <FormField label="Phone Number" valueName={'phoneNumber'} defaultValue={initialPhoneNumber} />
      <FormField label="Website" valueName={'website'} defaultValue={initialWebsite} />
    </StaticFormSection>
  );
}

export default GeneralInformationFormSection;
