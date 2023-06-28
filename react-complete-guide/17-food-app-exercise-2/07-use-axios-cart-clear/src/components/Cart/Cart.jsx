import { useContext, useState } from 'react';
import useAxios from '../../hooks/useAxios';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Modal from '../UI/Modal.jsx';
import Checkout from './Checkout';

const Cart = ({ onCloseModal }) => {
  const cartCtx = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const { isLoading, error, sendRequest } = useAxios();

  const onAddItem = item => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const onRemoveItem = id => {
    cartCtx.removeItem(id);
  };
  const orderHandler = () => {
    setIsCheckout(true);
  };
  const processFn = () => {
    window.alert('주문 완료!🥡');
  };
  const orderReceiptHandler = userdata => {
    sendRequest({
      method: 'POST',
      config: {
        user: userdata,
        orderedItems: cartCtx.items,
      },
      processFn: processFn,
    });

    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map(item => (
        <CartItem
          key={item.id}
          onAddItem={onAddItem.bind(null, item)}
          onRemoveItem={onRemoveItem.bind(null, item.id)}
          {...item}
        />
      ))}
    </ul>
  );
  const modalActions = !isCheckout ? (
    <div className={classes.actions}>
      <button onClick={onCloseModal} className={classes['button--alt']}>
        Close
      </button>
      {cartCtx.items.length > 0 && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  ) : (
    <Checkout onConfirm={orderReceiptHandler} onCancel={onCloseModal} />
  );
  const cartModalContent = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$${cartCtx.totalAmount.toFixed(2)}`}</span>
      </div>
      {modalActions}
    </>
  );
  const isSubmittingModalContent = <p>Sending order data...</p>;
  const didSubmitModalContent = (
    <>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={onCloseModal}>
          Close
        </button>
      </div>
    </>
  );

  return (
    <Modal onClick={onCloseModal}>
      {error && <p>error!</p>}
      {!error && isLoading && isSubmittingModalContent}
      {!error && !isLoading && !didSubmit && cartModalContent}
      {!error && !isLoading && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
