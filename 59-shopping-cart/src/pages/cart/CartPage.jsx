import { Link } from 'react-router-dom';
import { useCart } from '../../app/App';
import CartCount from '../../components/cart-count/CartCount';
import ContinueShopping from '../../components/continue-shopping/ContinueShopping';
import InCartProductCard from '../../components/product-card/in-cart/InCartProductCard';
import ProductGrid from '../../components/product-grid/ProductGrid';
import styles from './CartPage.module.css';

function CartPage() {
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
          <Link to="/thank-you" onClick={clearCart} className={styles.checkoutButton}>
            Checkout
          </Link>
        </>
      ) : (
        <>
          <h2>Your cart is empty!</h2>
          <ContinueShopping />
        </>
      )}
    </main>
  );
}

export default CartPage;
