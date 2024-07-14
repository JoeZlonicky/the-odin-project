import { NavLink } from 'react-router-dom';
import styles from './ThankYouPage.module.css';

const ThankYouPage = () => {
  return (
    <main className={styles.thankYouPage}>
      <h1>Thank you!</h1>
      <NavLink to="/">Continue Shopping</NavLink>
    </main>
  );
};

export default ThankYouPage;
