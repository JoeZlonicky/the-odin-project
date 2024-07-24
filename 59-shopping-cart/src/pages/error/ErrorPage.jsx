import { Link, useRouteError } from 'react-router-dom';
import styles from './ErrorPage.module.css';

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <main className={styles.errorPage}>
      <h1>An Error Has Occurred :&#40;</h1>
      <p>
        Return to <Link to="/">Home Page</Link>
      </p>
    </main>
  );
}

export default ErrorPage;
