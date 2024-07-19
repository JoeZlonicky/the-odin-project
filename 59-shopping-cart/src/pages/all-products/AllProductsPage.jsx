import { useCart, useProducts } from '../../app/App';
import AddToCartProductCard from '../../components/product-card/add-to-cart/AddToCartProductCard';
import ProductCard from '../../components/product-card/ProductCard';
import ProductGrid from '../../components/product-grid/ProductGrid';
import styles from './AllProductsPage.module.css';

const AllProductsPage = () => {
  const [products, areProductsLoaded] = useProducts();

  const productCards = products.map((product) => <AddToCartProductCard product={product} key={product.id} />);

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
