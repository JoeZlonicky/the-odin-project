import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import CartCount from '../cart-count/CartCount';
import styles from './Header.module.css';

const Header = ({ cart }) => {
  return (
    <nav className={styles.header}>
      <div>The Tree Store</div>
      <div>By Joe Zlonicky</div>
      <div>
        <NavLink to="/">Store</NavLink>
        <NavLink to="/cart">
          Cart <CartCount cart={cart} />
        </NavLink>
      </div>
    </nav>
  );
};

Header.propTypes = {
  cart: PropTypes.instanceOf(Map),
};

export default Header;
