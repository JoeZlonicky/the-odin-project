import DynamicFormSection from '../form-components/DynamicFormSection';
import WorkExperienceFormSubsection from './WorkExperienceFormSubsection';

// onAddSubSection: () => ...
// onRemoveSubSection: (workId) => ...
function WorkExperienceFormSection({ workExperiences, onAddSubSection, onRemoveSubSection }) {
  return (
    <DynamicFormSection
      title={'Work Experience'}
      index={3}
      dataList={workExperiences}
      keyGenerator={(data) => data.id}
      childGenerator={(data) => <WorkExperienceFormSubsection initialWorkExperience={data} />}
      onAdd={() => onAddSubSection()}
      onRemove={(data) => onRemoveSubSection(data.id)}
    />
  );
}

export default WorkExperienceFormSection;
