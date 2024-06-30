import '../style/Resume.css';
import TrayContainer from './TrayContainer';

function Resume({ info, setIsEditing }) {
  return (
    <div className="resume">
      <h2 className="resume__name">{info.name}</h2>
      <div className="resume__contact">
        {info.phoneNumber} | {info.email} | {info.linkedIn}
      </div>
      <h3>Education</h3>
      <hr></hr>
      <div>
        <strong>{info.certification}</strong>
      </div>
      <div>
        <i>{info.schoolName}</i>, {info.startYear}-{info.graduationYear}
      </div>
      <h3>Work Experience</h3>
      <hr></hr>
      <div>
        <strong>{info.positionTitle}</strong> @ <i>{info.companyName}</i>, {info.startDate}-{info.endDate}
      </div>
      <div>{info.description}</div>
      <TrayContainer>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </TrayContainer>
    </div>
  );
}

export default Resume;
