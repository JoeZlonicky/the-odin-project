import FormField from './FormField';
import FormSection from './FormSection';
import WorkExperienceFormSection from './WorkExperienceFormSection';
import TrayContainer from './TrayContainer';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import '../style/InfoForm.css';

const workExperienceTemplate = {
  id: null,
  positionTitle: '',
  companyName: '',
  start: '',
  end: '',
  description: '',
};

function InfoForm({ initialInfo, setInfo, setIsEditing }) {
  const [workExperiences, setWorkExperiences] = useState(initialInfo.workExperiences);

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

  function addWorkExperience() {
    const newWork = Object.create(workExperienceTemplate);
    newWork.id = uuid();
    setWorkExperiences([...workExperiences, newWork]);
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
        {workExperiences.map((work) => (
          <WorkExperienceFormSection initialWorkExperience={work} key={work.id} />
        ))}
      </FormSection>
      <button type="button" onClick={addWorkExperience}>
        Add
      </button>

      <TrayContainer>
        <button type="submit">Generate</button>
      </TrayContainer>
    </form>
  );
}

export default InfoForm;
