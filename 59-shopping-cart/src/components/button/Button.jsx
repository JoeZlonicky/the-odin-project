import styles from './Button.module.css';

function Button({ children, onClick, ariaLabel = null }) {
  return (
    <button type="button" onClick={onClick} className={styles.button} aria-label={ariaLabel}>
      {children}
    </button>
  );
}

export default Button;
