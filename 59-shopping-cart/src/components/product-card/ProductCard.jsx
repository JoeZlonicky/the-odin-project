import PropTypes from 'prop-types';
import styles from './ProductCard.module.css';

const ProductCard = ({ img, title, cost, actionButtons }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.coverImage}>{img}</div>
      <div className={styles.title}>{title}</div>
      <div>${cost}</div>
      <div className={styles.bottomContainer}>
        <div>Quantity</div>
        <div>{actionButtons}</div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  actionButtons: PropTypes.arrayOf(PropTypes.element),
};

export default ProductCard;
