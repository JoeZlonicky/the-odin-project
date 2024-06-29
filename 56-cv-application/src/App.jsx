import { useState } from 'react';
import './App.css';
import InfoForm from './components/InfoForm';
import Resume from './components/Resume';

function App() {
  const [isEditing, setIsEditing] = useState(true);
  const [info, setInfo] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    linkedIn: '',

    schoolName: '',
    certification: '',
    startYear: null,
    graduationYear: null,

    workExperience: [], // TODO: Implement work experience as list
    positionTitle: '',
    companyName: '',
    startDate: '',
    endDate: '',
    description: '',
  });

  return (
    <>
      <h1>Resume Builder</h1>
      <h3>By Joe Zlonicky</h3>
      {isEditing && <InfoForm initialInfo={info} setInfo={setInfo} setIsEditing={setIsEditing} />}
      {!isEditing && <Resume info={info} setIsEditing={setIsEditing} />}
    </>
  );
}

export default App;
