import { useState } from 'react';
import CardDisplay from './components/CardDisplay';
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <>
      <h1 className="app__title">Memory Game</h1>
      <div className="app__author">By Joe Zlonicky</div>

      <div className="app__score-container">
        <span>Score: {score}</span>
        <span>High score: {highScore}</span>
      </div>

      <CardDisplay />
    </>
  );
}

export default App;
