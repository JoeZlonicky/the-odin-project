import styles from './ProductGrid.module.css';

const ProductGrid = ({ children }) => {
  return <div className={styles.productGrid}>{children}</div>;
};

export default ProductGrid;
