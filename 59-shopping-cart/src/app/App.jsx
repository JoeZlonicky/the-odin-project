import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Header from '../components/header/Header';
import './App.css';

const defaultCart = new Map();
defaultCart.set('Apples', 3);

const loadedProducts = [
  {
    name: 'maple',
    id: uuid(),
    img: 'IMAGE LINK',
    cost: 100,
  },
  {
    name: 'oak',
    id: uuid(),
    img: 'IMAGE LINK',
    cost: 200,
  },
];

function App() {
  const [cart, setCart] = useState(defaultCart);
  const [products, setProducts] = useState([]);
  const [areProductsLoaded, setAreProductsLoaded] = useState(false);

  useEffect(() => {
    setAreProductsLoaded(false);
    setProducts(loadedProducts);
    setAreProductsLoaded(true);
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
