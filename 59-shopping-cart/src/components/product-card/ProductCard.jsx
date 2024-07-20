import PropTypes from 'prop-types';
import QuantityPill from '../quantity-pill/QuantityPill';
import styles from './ProductCard.module.css';

const ProductCard = ({ product, actionButtons, quantity, setQuantity }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.coverImage}>{product.img}</div>
      <div className={styles.title}>{product.name}</div>
      <div className={styles.cost}>¥{product.cost}</div>
      <div className={styles.bottomContainer}>
        <QuantityPill quantity={quantity} setQuantity={setQuantity} id={product.id} />
        <div>{actionButtons}</div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
  }).isRequired,
  actionButtons: PropTypes.arrayOf(PropTypes.element),
};

export default ProductCard;
