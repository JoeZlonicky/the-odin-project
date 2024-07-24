import PropTypes from 'prop-types';
import { useCart } from '../../../app/App';
import ProductType from '../../../types/ProductType';
import Button from '../../button/Button';
import productCardStyles from '../ProductCard.module.css';
import styles from './InCartProductCard.module.css';

function InCartProductCard({ product, quantity = 1 }) {
  const [cart, setCart] = useCart();

  const removeFromCart = () => {
    const newCart = new Map([...cart]);
    newCart.delete(product);
    setCart(newCart);
  };

  return (
    <div className={productCardStyles.productCard}>
      <img className={productCardStyles.coverImage} src={product.img}></img>
      <div className={productCardStyles.title}>{product.name}</div>
      <div className={productCardStyles.cost}>
        ¥{product.cost}
        {quantity > 1 && ` x${quantity}`}
      </div>
      <div className={styles.bottomSection}>
        <Button onClick={removeFromCart} isNegative={true}>
          Remove from Cart
        </Button>
      </div>
    </div>
  );
}

InCartProductCard.propTypes = {
  product: PropTypes.shape(ProductType),
  quantity: PropTypes.number,
};

export default InCartProductCard;
