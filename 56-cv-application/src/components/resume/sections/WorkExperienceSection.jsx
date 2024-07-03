import WorkExperienceSubsection from './WorkExperienceSubsection';
import '../../../style/resume/WorkExperienceSection.css';

function WorkExperienceSection({ workExperiences }) {
  return (
    <>
      <h3>Work Experience</h3>
      <hr></hr>
      <div className="work-experience-section__subsection-container">
        {workExperiences.map((work) => (
          <WorkExperienceSubsection {...work} key={work.id} />
        ))}
      </div>
    </>
  );
}

export default WorkExperienceSection;
