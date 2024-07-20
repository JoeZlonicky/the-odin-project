import styles from './QuantityPill.module.css';

const QuantityPill = ({ quantity, setQuantity, id }) => {
  const decrement = () => {
    if (quantity == 0) return;
    setQuantity((quantity) => quantity - 1);
  };

  const increment = () => {
    setQuantity((quantity) => quantity + 1);
  };

  const onInputChange = (newValue) => {
    newValue = newValue.replace(/\D/g, '');
    if (newValue == '') {
      setQuantity(0);
      return;
    }

    newValue = parseInt(newValue);
    if (quantity == newValue) return;

    setQuantity(newValue);
  };

  return (
    <div className={styles.quantityPill}>
      <label className={styles.label} htmlFor={id + '-input'}>
        Quantity
      </label>
      <div className={styles.inputContainer}>
        <button type="button" onClick={decrement} className={styles.button} aria-label="Decrement">
          —
        </button>
        <input
          id={id + '-input'}
          min="0"
          className={styles.input}
          value={quantity}
          onChange={(e) => onInputChange(e.target.value)}
          maxLength={3}
        ></input>
        <button type="button" onClick={increment} className={styles.button} aria-label="Increment">
          +
        </button>
      </div>
    </div>
  );
};

export default QuantityPill;
