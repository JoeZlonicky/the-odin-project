import { NavLink } from 'react-router-dom';
import styles from './ContinueShopping.module.css';

const ContinueShopping = () => {
  return (
    <NavLink to="/all-products" className={styles.continueShopping}>
      Continue Shopping
    </NavLink>
  );
};

export default ContinueShopping;
