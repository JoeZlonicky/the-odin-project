import { useEffect, useState } from 'react';
import fetchPokemonList from '../utility/fetchPokemonList';
import shuffleArray from '../utility/shuffleArray';
import Card from './Card';
import './CardDisplay.css';

function CardDisplay({ incrementScore, resetScore, displayNotification, incrementTimesBeat, nCards = 10 }) {
  const [loaded, setIsLoaded] = useState(false);
  const [cardData, setCardData] = useState([]);
  const [selectedNames, setSelectedNames] = useState([]);

  async function loadCardData() {
    setIsLoaded(false);

    let pokemonList = await fetchPokemonList();
    pokemonList = shuffleArray(pokemonList);

    const subset = pokemonList.slice(0, nCards);
    setCardData(subset);
    setIsLoaded(true);
  }

  useEffect(() => {
    loadCardData();
  }, []);

  const onCardSelected = (cardName) => {
    if (selectedNames.some((value) => value === cardName)) {
      resetScore();
      setSelectedNames([]);
      setCardData(shuffleArray(cardData));
      displayNotification('Oops!');
      return;
    }

    incrementScore();
    selectedNames.push(cardName);

    if (selectedNames.length === cardData.length) {
      displayNotification('Victory!');
      loadCardData();
      setSelectedNames([]);
      incrementTimesBeat();
      resetScore();
      return;
    }

    setCardData(shuffleArray(cardData));
  };

  const cards = cardData.map((data, idx) => (
    <Card data={data} key={data.name} onSelect={() => onCardSelected(data.name)} shouldAutoFocus={idx === 0} />
  ));

  return (
    <div className="card-display">
      <h2 className="card-display__instructions">Which haven't you selected?</h2>
      {!loaded && <div className="card-display__loading">Loading...</div>}
      {loaded && <div className="card-display__card-container">{cards}</div>}
    </div>
  );
}

export default CardDisplay;
