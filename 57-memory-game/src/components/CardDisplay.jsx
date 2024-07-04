import { useState } from 'react';
import dittoImage from '../assets/images/ditto.png';
import Card from './Card';
import './CardDisplay.css';

function CardDisplay() {
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

  const cards = cardData.map((data) => <Card data={data} key={data.name} />);

  return (
    <div className="card-display">
      <h2 className="card-display__instructions">Which haven't you selected?</h2>
      {!loaded && <div>Loading...</div>}
      {loaded && <div className="card-display__card-container">{cards}</div>}
    </div>
  );
}

export default CardDisplay;
