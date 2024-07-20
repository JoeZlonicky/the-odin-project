import { useState } from 'react';
import { useCart } from '../../../app/App';
import ProductCard from '../ProductCard';
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
    <ProductCard
      key={product.id}
      product={product}
      actionButtons={[
        <button onClick={addToCart} key="1" className={styles.addToCartButton}>
          Add to Cart
        </button>,
      ]}
      quantity={quantity}
      setQuantity={setQuantity}
    />
  );
};

export default AddToCartProductCard;
