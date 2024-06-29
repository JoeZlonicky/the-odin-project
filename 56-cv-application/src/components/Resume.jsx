function Resume({ info, setIsEditing }) {
  return (
    <div>
      <h2>{info.name}</h2>
      <div>
        {info.phoneNumber} | {info.email} | {info.linkedIn}
      </div>
      <h3>Education</h3>
      <div>{info.certification}</div>
      <div>
        {info.schoolName}, {info.startYear}-{info.graduationYear}
      </div>
      <h3>Work Experience</h3>
      <div>
        {info.positionTitle} @ {info.companyName}, {info.startDate}-{info.endDate}
      </div>
      <div>{info.description}</div>
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </div>
  );
}

export default Resume;
