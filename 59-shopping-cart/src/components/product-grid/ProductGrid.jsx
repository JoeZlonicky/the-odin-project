import styles from './ProductGrid.module.css';

function ProductGrid({ children }) {
  return <div className={styles.productGrid}>{children}</div>;
}

export default ProductGrid;
