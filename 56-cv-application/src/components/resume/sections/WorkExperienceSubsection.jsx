function WorkExperienceSubsection({ positionTitle, companyName, start, end, description }) {
  const hasPositionAndCompany = positionTitle && companyName;
  const hasDate = start || end;
  if (!end) {
    end = 'Present';
  }

  return (
    <>
      <div>
        <strong>{positionTitle}</strong>
        {hasPositionAndCompany && ' @ '}
        <i>{companyName}</i> {hasDate && `, ${start} - ${end}`}
      </div>
      <div className="resume__work-description">{description}</div>
    </>
  );
}

export default WorkExperienceSubsection;
