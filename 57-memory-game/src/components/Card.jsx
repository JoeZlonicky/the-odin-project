import './Card.css';

function Card({ data, onSelect }) {
  return (
    <div className="card" onClick={onSelect}>
      <img className="card__image" src={data.image} alt={data.name} />
      <div className="card__title">{data.name}</div>
    </div>
  );
}

export default Card;
