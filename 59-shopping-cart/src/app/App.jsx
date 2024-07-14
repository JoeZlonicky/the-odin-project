import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import Header from '../components/header/Header';
import './App.css';

const defaultCart = new Map();
defaultCart.set('Apples', 3);

function App() {
  const [cart, setCart] = useState(defaultCart);

  return (
    <>
      <Header cart={cart} />
      <Outlet context={[cart, setCart]} />
    </>
  );
}

// [cart, setCart]
export function useCart() {
  return useOutletContext();
}

export default App;
