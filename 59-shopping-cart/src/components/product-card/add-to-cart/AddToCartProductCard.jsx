import { useCart } from '../../../app/App';
import ProductCard from '../ProductCard';

const AddToCartProductCard = ({ product }) => {
  const [cart, setCart] = useCart();

  const addToCart = () => {
    console.log(`Add ${product.name} to cart`);
  };

  return (
    <ProductCard
      key={product.id}
      img={product.img}
      title={product.name}
      cost={product.cost}
      actionButtons={[
        <button onClick={addToCart} key="1">
          Add to Cart
        </button>,
      ]}
    />
  );
};

export default AddToCartProductCard;
