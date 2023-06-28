import { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/cartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const handleCartShowed = () => setCartIsShown(true);
  const handleCartHide = () => setCartIsShown(false);

  return (
    <>
      <CartProvider>
        <Header onClick={handleCartShowed} />
        <main>
          <Meals />
        </main>
        {cartIsShown && <Cart onClick={handleCartHide} />}
      </CartProvider>
    </>
  );
}

export default App;
