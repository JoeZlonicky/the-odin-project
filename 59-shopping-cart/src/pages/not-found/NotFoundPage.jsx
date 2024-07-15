import { NavLink } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <main className={styles.notFoundPage}>
      <h1>Page not found!</h1>
      <p>
        Return to <NavLink to="/">Home Page</NavLink>
      </p>
    </main>
  );
};

export default NotFoundPage;
