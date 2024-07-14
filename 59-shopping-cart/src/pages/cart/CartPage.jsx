import { useCart } from '../../app/App';
import CartCount from '../../components/cart-count/CartCount';

const CartPage = () => {
  const [cart, setCart] = useCart();

  return (
    <div>
      <h1>
        Cart (<CartCount cart={cart} />)
      </h1>
    </div>
  );
};

export default CartPage;
