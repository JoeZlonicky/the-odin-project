import PropTypes from 'prop-types';

function CartCount({ cart }) {
  let count = 0;
  cart.forEach((value) => {
    count += value;
  });
  return <>{count}</>;
}

CartCount.propTypes = {
  cart: PropTypes.instanceOf(Map).isRequired,
};

export default CartCount;
