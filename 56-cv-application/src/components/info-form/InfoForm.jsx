import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import TrayContainer from '../TrayContainer';
import EducationFormSection from './sections/EducationFormSection';
import GeneralInformationFormSection from './sections/GeneralInformationFormSection';
import WorkExperienceFormSection from './sections/WorkExperienceFormSection';
import '../../style/info-form/InfoForm.css';

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
    const idToWork = {};

    for (const [key, value] of formData.entries()) {
      if (key.startsWith('work__')) {
        const [_, id, workKey] = key.split('__');
        if (idToWork.id === undefined) {
          idToWork.id = Object.create(workExperienceTemplate);
        }
        idToWork.id.workKey = value;
        continue;
      }
      newInfo[key] = value;
    }

    if (newInfo.workExperiences === undefined) {
      newInfo.workExperiences = [];
    }

    for (const work of Object.values(idToWork)) {
      newInfo.workExperiences.push(work);
    }

    setInfo(newInfo);
    setIsEditing(false);
  }

  function addWorkExperience() {
    const newWork = Object.create(workExperienceTemplate);
    newWork.id = uuid();
    setWorkExperiences([...workExperiences, newWork]);
  }

  function removeWorkExperience(id) {
    const filtered = workExperiences.filter((work) => work.id !== id);
    setWorkExperiences(filtered);
  }

  return (
    <form method="post" onSubmit={handleSubmit} className="info-form">
      <GeneralInformationFormSection
        initialName={initialInfo.name}
        initialEmail={initialInfo.email}
        initialPhoneNumber={initialInfo.phoneNumber}
        initialWebsite={initialInfo.website}
      />

      <EducationFormSection
        initialCertification={initialInfo.certification}
        initialSchoolName={initialInfo.schoolName}
        initialStart={initialInfo.educationStart}
        initialEnd={initialInfo.educationEnd}
      />

      <WorkExperienceFormSection
        workExperiences={workExperiences}
        onAddSubSection={addWorkExperience}
        onRemoveSubSection={removeWorkExperience}
      />

      <TrayContainer>
        <button type="submit">Generate</button>
      </TrayContainer>
    </form>
  );
}

export default InfoForm;
