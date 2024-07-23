import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Header from '../components/header/Header';
import './App.css';

const loadedProducts = [
  {
    name: 'Pokeball',
    id: uuid(),
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png',
    cost: 100,
  },
  {
    name: 'Healing Potion',
    id: uuid(),
    img: 'IMAGE LINK',
    cost: 200,
  },
  {
    name: 'Healing Potion',
    id: uuid(),
    img: 'IMAGE LINK',
    cost: 300,
  },
  {
    name: 'Healing Potion',
    id: uuid(),
    img: 'IMAGE LINK',
    cost: 400,
  },
  {
    name: 'Healing Potion',
    id: uuid(),
    img: 'IMAGE LINK',
    cost: 400,
  },
  {
    name: 'Healing Potion',
    id: uuid(),
    img: 'IMAGE LINK',
    cost: 400,
  },
];

const defaultCart = new Map();
defaultCart.set(loadedProducts[0], 3);

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
