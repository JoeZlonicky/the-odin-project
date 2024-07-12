import { useState } from 'react';
import CardDisplay from './components/CardDisplay';
import Notification from './components/Notification';
import './App.css';

const N_CARDS = 12;

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [timesBeat, setTimesBeat] = useState(0);
  const [notification, setNotification] = useState('');
  const [notificationCount, setNotificationCount] = useState(0);

  const incrementScore = () => {
    setScore((current) => {
      const newScore = current + 1;
      if (newScore > highScore) {
        setHighScore(newScore);
      }
      return newScore;
    });
  };

  const incrementTimesBeat = () => {
    setTimesBeat((current) => current + 1);
  };

  const resetScore = () => {
    setScore(0);
  };

  const displayNotification = (text) => {
    setNotification(text);
    setNotificationCount((current) => current + 1);
  };

  return (
    <>
      <h1 className="app__title">Memory Game</h1>
      <div className="app__author">By Joe Zlonicky</div>

      <div className="app__score-container">
        <span>Score: {score}</span>
        {timesBeat > 0 && <span>Times beat: {timesBeat}</span>}
        {timesBeat === 0 && <span>High score: {highScore}</span>}
      </div>

      <Notification text={notification} key={`${notification}-${notificationCount}`} />
      <CardDisplay
        incrementScore={incrementScore}
        resetScore={resetScore}
        incrementTimesBeat={incrementTimesBeat}
        displayNotification={displayNotification}
        nCards={N_CARDS}
      />
    </>
  );
}

export default App;
