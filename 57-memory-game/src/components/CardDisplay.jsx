import { useState } from 'react';
import dittoImage from '../assets/images/ditto.png';
import Card from './Card';
import './CardDisplay.css';

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; --i) {
    const k = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[k]] = [arr[k], arr[i]];
  }
  return arr;
}

function CardDisplay({ incrementScore, resetScore }) {
  const [loaded, setIsLoaded] = useState(true);
  const [cardData, setCardData] = useState([
    {
      name: 'Ditto1',
      image: dittoImage,
    },
    {
      name: 'Ditto2',
      image: dittoImage,
    },
    {
      name: 'Ditto3',
      image: dittoImage,
    },
    {
      name: 'Ditto4',
      image: dittoImage,
    },
    {
      name: 'Ditto5',
      image: dittoImage,
    },
    {
      name: 'Ditto6',
      image: dittoImage,
    },
    {
      name: 'Ditto7',
      image: dittoImage,
    },
    {
      name: 'Ditto8',
      image: dittoImage,
    },
    {
      name: 'Ditto9',
      image: dittoImage,
    },
    {
      name: 'Ditto10',
      image: dittoImage,
    },
    {
      name: 'Ditto11',
      image: dittoImage,
    },
    {
      name: 'Ditto12',
      image: dittoImage,
    },
  ]);
  const [selectedNames, setSelectedNames] = useState([]);

  const onCardSelected = (cardName) => {
    if (selectedNames.some((value) => value === cardName)) {
      resetScore();
      setSelectedNames([]);
      setCardData(shuffleArray(cardData));
      return;
    }

    incrementScore();
    setCardData(shuffleArray(cardData));
    selectedNames.push(cardName);
  };

  const cards = cardData.map((data) => <Card data={data} key={data.name} onSelect={() => onCardSelected(data.name)} />);

  return (
    <div className="card-display">
      <h2 className="card-display__instructions">Which haven't you selected?</h2>
      {!loaded && <div>Loading...</div>}
      {loaded && <div className="card-display__card-container">{cards}</div>}
    </div>
  );
}

export default CardDisplay;
