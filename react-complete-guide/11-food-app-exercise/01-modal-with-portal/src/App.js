import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const handleCartShowed = () => {
    setCartIsShown(true);
  };
  const handleCartHide = () => {
    setCartIsShown(false);
  };

  return (
    <>
      <Header onClick={handleCartShowed} />
      <main>
        <Meals />
      </main>
      {cartIsShown && <Cart onClick={handleCartHide} />}
    </>
  );
}

export default App;
