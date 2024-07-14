import { NavLink } from 'react-router-dom';
import { useCart } from '../../app/App';
import CartCount from '../../components/cart-count/CartCount';
import styles from './CartPage.module.css';

const CartPage = () => {
  const [cart, setCart] = useCart();

  const clearCart = () => {
    setCart(new Map());
  };

  return (
    <main className={styles.cartPage}>
      <h1>
        Cart (<CartCount cart={cart} />)
      </h1>

      <NavLink to="/thank-you" onClick={clearCart}>
        Checkout
      </NavLink>
    </main>
  );
};

export default CartPage;
