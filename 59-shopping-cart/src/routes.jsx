import App from './app/App';
import CartPage from './pages/cart/CartPage';
import ErrorPage from './pages/error/ErrorPage';
import NotFoundPage from './pages/not-found/NotFoundPage';
import StorePage from './pages/store/StorePage';
import ThankYouPage from './pages/thank-you/ThankYouPage';

const routes = [
  {
    element: <App />,
    path: '/*',
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <StorePage /> },
      { path: 'cart', element: <CartPage /> },
      { path: 'thank-you', element: <ThankYouPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
];

export default routes;
