import FormField from './FormField';
import FormTextArea from './FormTextArea';

function WorkExperienceFormSection({ initialWorkExperience }) {
  const key = initialWorkExperience.id;

  return (
    <div>
      <FormField
        label="Position Title"
        valueName={'positionTitle'}
        defaultValue={initialWorkExperience.positionTitle}
        idOverride={`${key}-positionTitle`}
      />
      <FormField
        label="Company Name"
        valueName={'companyName'}
        defaultValue={initialWorkExperience.companyName}
        idOverride={`${key}-companyName`}
      />
      <FormField
        label="Start Date"
        valueName={'start'}
        defaultValue={initialWorkExperience.start}
        idOverride={`${key}-start`}
      />
      <FormField
        label="End Date"
        valueName={'end'}
        defaultValue={initialWorkExperience.end}
        idOverride={`${key}-end`}
      />
      <FormTextArea
        label="Description"
        valueName={'description'}
        defaultValue={initialWorkExperience.description}
        idOverride={`${key}-description`}
      />
    </div>
  );
}

export default WorkExperienceFormSection;
