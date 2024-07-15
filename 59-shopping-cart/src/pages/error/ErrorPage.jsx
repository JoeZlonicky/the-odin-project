import { NavLink, useRouteError } from 'react-router-dom';
import styles from './ErrorPage.module.css';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <main className={styles.errorPage}>
      <h1>An Error Has Occurred :&#40;</h1>
      <p>
        Return to <NavLink to="/">Home Page</NavLink>
      </p>
    </main>
  );
};

export default ErrorPage;
