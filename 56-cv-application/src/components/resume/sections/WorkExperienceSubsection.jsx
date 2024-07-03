import '../../../style/resume/WorkExperienceSubsection.css';

function WorkExperienceSubsection({ positionTitle, companyName, start, end, description }) {
  const hasPositionAndCompany = positionTitle && companyName;
  const hasDate = start || end;
  if (!end) {
    end = 'Present';
  }

  return (
    <div>
      <div>
        <strong>{positionTitle}</strong>
        {hasPositionAndCompany && ' @ '}
        <i>{companyName}</i>
        {hasDate && `, ${start} - ${end}`}
      </div>
      <div className="work-experience-subsection__description">{description}</div>
    </div>
  );
}

export default WorkExperienceSubsection;
