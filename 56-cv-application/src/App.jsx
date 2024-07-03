import { useState } from 'react';
import InfoForm from './components/InfoForm';
import Resume from './components/Resume';
import './App.css';

function App() {
  const [isEditing, setIsEditing] = useState(true);
  const [info, setInfo] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    website: '',

    certification: '',
    schoolName: '',
    educationStart: null,
    educationEnd: null,

    workExperiences: [],
  });

  return (
    <>
      <h1 className="app__title">Resume Builder</h1>
      <h3 className="app__author">By Joe Zlonicky</h3>
      {isEditing && <InfoForm initialInfo={info} setInfo={setInfo} setIsEditing={setIsEditing} />}
      {!isEditing && <Resume info={info} setIsEditing={setIsEditing} />}
    </>
  );
}

export default App;
