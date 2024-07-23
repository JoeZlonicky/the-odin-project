import { NavLink } from 'react-router-dom';
import ContinueShopping from '../../components/continue-shopping/ContinueShopping';
import styles from './ThankYouPage.module.css';

const ThankYouPage = () => {
  return (
    <main className={styles.thankYouPage}>
      <h1>Thank you for shopping at Poké Mart!</h1>
      <ContinueShopping />
    </main>
  );
};

export default ThankYouPage;
