import { useCart } from '../../../app/App';
import productCardStyles from '../ProductCard.module.css';
import styles from './InCartProductCard.module.css';

const InCartProductCard = ({ product, quantity }) => {
  const [cart, setCart] = useCart();

  const removeFromCart = () => {};

  return (
    <div className={productCardStyles.productCard}>
      <div className={productCardStyles.coverImage}>{product.img}</div>
      <div className={productCardStyles.title}>{product.name}</div>
      <div className={productCardStyles.cost}>
        ¥{product.cost}
        {quantity > 1 && ` x${quantity}`}
      </div>
      <button onClick={removeFromCart} className={styles.removeFromCartButton}>
        Remove from Cart
      </button>
    </div>
  );
};

export default InCartProductCard;
