import './Card.css';

function Card({ data }) {
  return (
    <div className="card">
      <img className="card__image" src={data.image} alt={data.name} />
      <div className="card__title">{data.name}</div>
    </div>
  );
}

export default Card;
