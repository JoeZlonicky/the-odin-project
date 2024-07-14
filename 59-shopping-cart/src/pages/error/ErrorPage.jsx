import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <>
      <h1>An Error Has Occurred :&#40;</h1>
    </>
  );
};

export default ErrorPage;
