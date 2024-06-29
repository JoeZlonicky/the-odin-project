import FormField from './FormField';

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
    <form method="post" onSubmit={handleSubmit}>
      <h2>1. General Information</h2>
      <FormField label="Name" valueName={'name'} defaultValue={initialInfo.name} />
      <FormField label="Email" valueName={'email'} defaultValue={initialInfo.email} />
      <FormField label="Phone Number" valueName={'phoneNumber'} defaultValue={initialInfo.phoneNumber} />
      <FormField label="LinkedIn" valueName={'linkedIn'} defaultValue={initialInfo.linkedIn} />

      <h2>2. Education</h2>
      <FormField label="School Name" valueName={'schoolName'} defaultValue={initialInfo.schoolName} />
      <FormField label="Certification" valueName={'certification'} defaultValue={initialInfo.certification} />
      <FormField label="Start Year" valueName={'startYear'} defaultValue={initialInfo.startYear} />
      <FormField label="Graduation Year" valueName={'graduationYear'} defaultValue={initialInfo.graduationYear} />

      <h2>3. Work Experience</h2>
      <FormField label="Position Title" valueName={'positionTitle'} defaultValue={initialInfo.positionTitle} />
      <FormField label="Company Name" valueName={'companyName'} defaultValue={initialInfo.companyName} />
      <FormField label="Start Date" valueName={'startDate'} defaultValue={initialInfo.startDate} />
      <FormField label="End Date" valueName={'endDate'} defaultValue={initialInfo.endDate} />
      <FormField label="Description" valueName={'description'} defaultValue={initialInfo.description} />

      <button type="submit">Generate</button>
    </form>
  );
}

export default InfoForm;
