import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const isCartOpen = useSelector(state => state.ui.isCartOpen);

  return (
    <Layout>
      {isCartOpen && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
