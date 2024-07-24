import Button from '../button/Button';
import styles from './QuantityPill.module.css';

function QuantityPill({ quantity, setQuantity, id }) {
  const decrement = () => {
    if (quantity <= 0) return;
    setQuantity(quantity - 1);
  };

  const increment = () => {
    if (quantity >= 999) return;
    setQuantity(quantity + 1);
  };

  const onInputChange = (newValue) => {
    newValue = newValue.replace(/\D/g, '');
    if (newValue == '') {
      setQuantity(0);
      return;
    }

    newValue = parseInt(newValue);
    setQuantity(newValue);
  };

  return (
    <div className={styles.quantityPill}>
      <label className={styles.label} htmlFor={id + '-input'}>
        Quantity
      </label>
      <div className={styles.inputContainer}>
        <Button onClick={decrement} ariaLabel="Decrement">
          —
        </Button>
        <input
          id={id + '-input'}
          min="0"
          className={styles.input}
          value={quantity}
          onChange={(e) => onInputChange(e.target.value)}
          maxLength={3}
        ></input>
        <Button onClick={increment} ariaLabel="Increment">
          +
        </Button>
      </div>
    </div>
  );
}

export default QuantityPill;
