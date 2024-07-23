import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import CartCount from '../cart-count/CartCount';
import styles from './Header.module.css';

const Header = ({ cart }) => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.titleAndAuthor}>
          <NavLink to="/" className={styles.title}>
            Poké Mart
          </NavLink>
          <div className={styles.author}>By Joe Zlonicky</div>
        </div>

        <nav className={styles.nav}>
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')}>
            Home
          </NavLink>
          <NavLink to="/all-products" className={({ isActive }) => (isActive ? styles.active : '')}>
            All Products
          </NavLink>
          <NavLink to="/cart" className={({ isActive }) => (isActive ? styles.active : '')}>
            Cart (<CartCount cart={cart} />)
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  cart: PropTypes.instanceOf(Map),
};

export default Header;
