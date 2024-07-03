import TrayContainer from './TrayContainer';
import '../style/Resume.css';

function TopSection({ name, email, phoneNumber, website }) {
  const mailTo = 'mailto:' + email;
  if (website) {
    website = website.replace('www.', '').replace('https://', '');
    if (website.endsWith('/')) {
      website = website.substring(0, website.length - 1);
    }
  }

  return (
    <>
      <h2 className="resume__name">{name}</h2>
      <div className="resume__contact">
        {phoneNumber} | <a href={mailTo}>{email}</a> {website && '| '}
        {website && (
          <a href={'https://' + website} target="_blank">
            {website}
          </a>
        )}
      </div>
    </>
  );
}

function EducationSection({ schoolName, certification, educationStart, educationEnd }) {
  if (!schoolName && !certification) return;
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

function WorkSection({ workExperiences }) {
  if (!workExperiences || workExperiences.length === 0) return;

  return (
    <>
      <h3>Work Experience</h3>
      <hr></hr>
      {workExperiences.map((work) => (
        <WorkSubsection {...work} key={work.id} />
      ))}
    </>
  );
}

function WorkSubsection({ positionTitle, companyName, workStart, workEnd, workDescription }) {
  if (!positionTitle && !companyName) return;
  const hasPositionAndCompany = positionTitle && companyName;
  const hasDate = workStart || workEnd;
  workEnd = workEnd ? workEnd : 'Present';

  return (
    <>
      <div>
        <strong>{positionTitle}</strong>
        {hasPositionAndCompany && ' @ '}
        <i>{companyName}</i> {hasDate && `, ${workStart} - ${workEnd}`}
      </div>
      <div className="resume__work-description">{workDescription}</div>
    </>
  );
}

function Resume({ info, setIsEditing }) {
  return (
    <div className="resume">
      <TopSection {...info} />
      <EducationSection {...info} />
      <WorkSection {...info} />
      <TrayContainer>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </TrayContainer>
    </div>
  );
}

export default Resume;
