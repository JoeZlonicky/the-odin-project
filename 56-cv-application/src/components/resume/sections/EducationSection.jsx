function EducationSection({ schoolName, certification, educationStart, educationEnd }) {
  const hasDate = educationStart || educationEnd;
  educationEnd = educationEnd ? educationEnd : 'Present';

  return (
    <>
      <h3>Education</h3>
      <hr></hr>
      <div>
        <strong>{certification}</strong>
      </div>
      <div>
        <i>{schoolName}</i>
        {hasDate && `, ${educationStart} - ${educationEnd}`}
      </div>
    </>
  );
}

export default EducationSection;
