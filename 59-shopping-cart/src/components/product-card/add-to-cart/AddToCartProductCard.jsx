import { useState } from 'react';
import { useCart } from '../../../app/App';
import QuantityPill from '../../quantity-pill/QuantityPill';
import productCardStyles from '../ProductCard.module.css';
import styles from './AddToCartProductCard.module.css';

const AddToCartProductCard = ({ product }) => {
  const [cart, setCart] = useCart();
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    if (quantity < 1 || quantity > 999) return;

    const quantityInCart = cart.get(product) || 0;
    if (quantityInCart >= 999) return;

    let newQuantity = quantityInCart + quantity;
    if (newQuantity > 999) {
      newQuantity = 999;
    }

    setCart(new Map([...cart, [product, newQuantity]]));
    setQuantity(1);
  };

  return (
    <div className={productCardStyles.productCard}>
      <img className={productCardStyles.coverImage} src={product.img}></img>
      <div className={productCardStyles.title}>{product.name}</div>
      <div className={productCardStyles.cost}>¥{product.cost}</div>
      <div className={styles.bottomContainer}>
        <QuantityPill quantity={quantity} setQuantity={setQuantity} id={product.id} />
        <button onClick={addToCart} className={styles.addToCartButton}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default AddToCartProductCard;
