import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import DynamicFormSection from './DynamicFormSection';
import FormField from './FormField';
import FormSection from './FormSection';
import FormTextArea from './FormTextArea';
import TrayContainer from './TrayContainer';
import '../style/InfoForm.css';

const workExperienceTemplate = {
  id: null,
  positionTitle: '',
  companyName: '',
  start: '',
  end: '',
  description: '',
};

function WorkExperienceFillOut({ initialWorkExperience }) {
  const key = initialWorkExperience.id;

  return (
    <>
      <FormField
        label="Position Title"
        valueName={`work-${key}-positionTitle`}
        defaultValue={initialWorkExperience.positionTitle}
        idOverride={`${key}-positionTitle`}
      />
      <FormField
        label="Company Name"
        valueName={`work__${key}__companyName`}
        defaultValue={initialWorkExperience.companyName}
        idOverride={`${key}-companyName`}
      />
      <FormField
        label="Start Date"
        valueName={`work__${key}__start`}
        defaultValue={initialWorkExperience.start}
        idOverride={`${key}-start`}
      />
      <FormField
        label="End Date"
        valueName={`work__${key}-end`}
        defaultValue={initialWorkExperience.end}
        idOverride={`${key}-end`}
      />
      <FormTextArea
        label="Description"
        valueName={`work-${key}-description`}
        defaultValue={initialWorkExperience.description}
        idOverride={`${key}-description`}
      />
    </>
  );
}

function InfoForm({ initialInfo, setInfo, setIsEditing }) {
  const [workExperiences, setWorkExperiences] = useState(initialInfo.workExperiences);

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const newInfo = {};
    for (const [key, value] of formData.entries()) {
      newInfo[key] = value;
      console.log(`${key} = ${value}`);
    }

    if (newInfo.workExperiences === undefined) {
      newInfo.workExperiences = [];
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

      <DynamicFormSection
        title={'Work Experience'}
        index={3}
        dataList={workExperiences}
        keyGenerator={(data) => data.id}
        childGenerator={(data) => <WorkExperienceFillOut initialWorkExperience={data} />}
        onAdd={() => addWorkExperience()}
        onRemove={(data) => {
          const filtered = workExperiences.filter((work) => work.id !== data.id);
          setWorkExperiences(filtered);
        }}
      />

      <TrayContainer>
        <button type="submit">Generate</button>
      </TrayContainer>
    </form>
  );
}

export default InfoForm;
