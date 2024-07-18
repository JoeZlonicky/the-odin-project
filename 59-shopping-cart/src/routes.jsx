import App from './app/App';
import CartPage from './pages/cart/CartPage';
import ErrorPage from './pages/error/ErrorPage';
import NotFoundPage from './pages/not-found/NotFoundPage';
import AllProductsPage from './pages/all-products/AllProductsPage';
import ThankYouPage from './pages/thank-you/ThankYouPage';
import HomePage from './pages/home/HomePage';

const routes = [
  {
    element: <App />,
    path: '/*',
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'all-products', element: <AllProductsPage/>},
      { path: 'cart', element: <CartPage /> },
      { path: 'thank-you', element: <ThankYouPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
];

export default routes;
