import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import Header from '../components/header/Header';
import fetchData from '../data/fetchData';
import './App.css';

const defaultCart = new Map();

function App() {
  const [cart, setCart] = useState(defaultCart);
  const [products, setProducts] = useState([]);
  const [areProductsLoaded, setAreProductsLoaded] = useState(false);

  useEffect(() => {
    setAreProductsLoaded(false);
    fetchData().then((fetchedProducts) => {
      setProducts(fetchedProducts);
      setAreProductsLoaded(true);
    });
  }, []);

  return (
    <>
      <Header cart={cart} />
      <Outlet context={{ cart, setCart, products, areProductsLoaded }} />
    </>
  );
}

// [cart, setCart]
export function useCart() {
  const { cart, setCart } = useOutletContext();
  return [cart, setCart];
}

// [products, areProductsLoaded]
export function useProducts() {
  const { products, areProductsLoaded } = useOutletContext();
  return [products, areProductsLoaded];
}

export default App;
