import { useCart, useProducts } from '../../app/App';
import ProductCard from '../../components/product-card/ProductCard';
import ProductGrid from '../../components/product-grid/ProductGrid';
import styles from './AllProductsPage.module.css';

const AllProductsPage = () => {
  const [cart, setCart] = useCart();
  const [products, areProductsLoaded] = useProducts();

  const productCards = products.map((product) => {
    const addToCart = () => {
      console.log(`Add ${product.name} to cart`);
    };
    const addToCartButton = (
      <button onClick={addToCart} key="1">
        Add to Cart
      </button>
    );
    return (
      <ProductCard
        key={product.id}
        img={product.img}
        title={product.name}
        cost={product.cost}
        actionButtons={[addToCartButton]}
      />
    );
  });

  return (
    <main className={styles.allProductsPage}>
      <h1>All Products</h1>
      {!areProductsLoaded && <div>Loading products...</div>}
      {areProductsLoaded && products.length === 0 && <div>Hmm, we don&apos;t seem to have any products</div>}
      {areProductsLoaded && products.length > 0 && <ProductGrid>{productCards}</ProductGrid>}
    </main>
  );
};

export default AllProductsPage;
