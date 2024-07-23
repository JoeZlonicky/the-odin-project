import { useProducts } from '../../app/App';
import AddToCartProductCard from '../../components/product-card/add-to-cart/AddToCartProductCard';
import ProductGrid from '../../components/product-grid/ProductGrid';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [products, areProductsLoaded] = useProducts();

  const popularProductCards = products
    .slice(0, 5)
    .map((product) => <AddToCartProductCard product={product} key={product.id} />);

  return (
    <main className={styles.homePage}>
      <h1 className={styles.title}>Poké Mart</h1>
      <div className={styles.description}>Your one-stop-shop for Pokémon items</div>
      {areProductsLoaded && (
        <>
          <h2 className={styles.popularItemsTitle}>Popular Items</h2>
          {<ProductGrid>{popularProductCards}</ProductGrid>}
        </>
      )}
    </main>
  );
};

export default HomePage;
