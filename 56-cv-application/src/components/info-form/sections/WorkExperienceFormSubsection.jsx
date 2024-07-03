import FormField from '../form-components/FormField';
import FormTextArea from '../form-components/FormTextArea';

function WorkExperienceFormSubsection({ initialWorkExperience }) {
  const key = initialWorkExperience.id;

  return (
    <>
      <FormField
        label="Position Title"
        valueName={`work__${key}__positionTitle`}
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
        valueName={`work__${key}__description`}
        defaultValue={initialWorkExperience.description}
        idOverride={`${key}-description`}
      />
    </>
  );
}

export default WorkExperienceFormSubsection;
