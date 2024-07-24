import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button({ children, onClick, ariaLabel = null, isNegative = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles.button} ${isNegative && styles.negative}`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string,
  isNegative: PropTypes.bool,
};

export default Button;
