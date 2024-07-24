function CartCount({ cart }) {
  let count = 0;
  cart.forEach((value) => {
    count += value;
  });
  return <>{count}</>;
}

export default CartCount;
