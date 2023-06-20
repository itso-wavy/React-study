import { useContext } from 'react';

import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Modal from '../UI/Modal.jsx';

const Cart = ({ onClick }) => {
  const cartCtx = useContext(CartContext);

  const onAddItem = item => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const onRemoveItem = id => {
    cartCtx.removeItem(id);
  };

  const dummyItems = (
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

  return (
    <Modal onClick={onClick}>
      {dummyItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$${cartCtx.totalAmount.toFixed(2)}`}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={onClick} className={classes['button--alt']}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
