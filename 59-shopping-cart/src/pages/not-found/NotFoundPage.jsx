import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

function NotFoundPage() {
  return (
    <main className={styles.notFoundPage}>
      <h1>Page not found!</h1>
      <p>
        Return to <Link to="/">Home Page</Link>
      </p>
    </main>
  );
}

export default NotFoundPage;
