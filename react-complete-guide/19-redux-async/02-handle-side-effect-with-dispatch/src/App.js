import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showNotification } from './store/ui-slice';
import { sendCartData } from './store/cart-slice';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(state => state.ui.isCartOpen);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    } // App 처음 실행시에는 카트 데이터 업데이트 하지 않도록 함

    dispatch(sendCartData(cart));
    // redux toolkit에 의해 매개변수로 dispatch가 입력되어 내부적으로 호출됨
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isCartOpen && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
