import { useEffect, useRef } from 'react';
import './Card.css';

function Card({ data, onSelect, shouldAutoFocus }) {
  const ref = useRef();

  useEffect(() => {
    if (shouldAutoFocus) {
      ref.current?.focus();
    }
  });

  return (
    <button className="card" onClick={onSelect} ref={ref} aria-label={data.name}>
      <img className="card__image" src={data.image} alt={data.name} />
      <div className="card__title">{data.name}</div>
    </button>
  );
}

export default Card;
