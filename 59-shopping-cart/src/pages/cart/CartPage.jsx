import { NavLink } from 'react-router-dom';
import { useCart } from '../../app/App';
import CartCount from '../../components/cart-count/CartCount';
import InCartProductCard from '../../components/product-card/in-cart/InCartProductCard';
import ProductGrid from '../../components/product-grid/ProductGrid';
import styles from './CartPage.module.css';

const CartPage = () => {
  const [cart, setCart] = useCart();

  const clearCart = () => {
    setCart(new Map());
  };

  const productCards = Array.from(cart, ([product, quantity]) => (
    <InCartProductCard product={product} quantity={quantity} key={product.id} />
  ));

  return (
    <main className={styles.cartPage}>
      <h1>
        Cart (<CartCount cart={cart} />)
      </h1>

      {productCards.length > 0 ? (
        <>
          <ProductGrid areShortCards={true}>{productCards}</ProductGrid>
          <NavLink to="/thank-you" onClick={clearCart} className={styles.checkoutButton}>
            Checkout
          </NavLink>
        </>
      ) : (
        <NavLink to="/all-products">Continue Shopping</NavLink>
      )}
    </main>
  );
};

export default CartPage;
