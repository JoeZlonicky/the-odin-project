import WorkExperienceSubsection from './WorkExperienceSubsection';

function WorkExperienceSection({ workExperiences }) {
  return (
    <>
      <h3>Work Experience</h3>
      <hr></hr>
      {workExperiences.map((work) => (
        <WorkExperienceSubsection {...work} key={work.id} />
      ))}
    </>
  );
}

export default WorkExperienceSection;
