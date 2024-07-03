import TrayContainer from '../TrayContainer';
import EducationSection from './sections/EducationSection';
import GeneralInformationSection from './sections/GeneralInformationSection';
import WorkExperienceSection from './sections/WorkExperienceSection';
import '../../style/resume/Resume.css';

function Resume({ info, setIsEditing }) {
  const workExperiences = info.workExperiences.filter(
    (experience) => experience.positionTitle || experience.companyName,
  );

  return (
    <div className="resume">
      <GeneralInformationSection {...info} />
      {(info.schoolName || info.certification) && <EducationSection {...info} />}
      {workExperiences.length > 0 && <WorkExperienceSection {...info} />}
      <TrayContainer>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </TrayContainer>
    </div>
  );
}

export default Resume;
