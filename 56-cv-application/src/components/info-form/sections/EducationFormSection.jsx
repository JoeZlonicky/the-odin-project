import FormField from '../form-components/FormField';
import StaticFormSection from '../form-components/StaticFormSection';

function EducationFormSection({ initialCertification, initialSchoolName, initialStart, initialEnd }) {
  return (
    <StaticFormSection title={'Education'} index={2}>
      <FormField label="Certification" valueName={'certification'} defaultValue={initialCertification} />
      <FormField label="School Name" valueName={'schoolName'} defaultValue={initialSchoolName} />
      <FormField label="Start Date" valueName={'educationStart'} defaultValue={initialStart} />
      <FormField label="Graduation Date" valueName={'educationEnd'} defaultValue={initialEnd} />
    </StaticFormSection>
  );
}

export default EducationFormSection;
