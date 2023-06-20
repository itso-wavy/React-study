import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const [cartIsShowed, setCartIsShowed] = useState(false);
  const handleCartShowed = () => {
    setCartIsShowed(true);
  };

  return (
    <>
      <Header onClick={handleCartShowed} />
      <main>
        <Meals />
      </main>
      <Cart />
      {/* {cartIsShowed && <Cart />} */}
    </>
  );
}

export default App;
