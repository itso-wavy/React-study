import Modal from '../UI/Modal.jsx';
import classes from './Cart.module.css';

const Cart = ({ onClick }) => {
  const dummyItems = (
    <ul className={classes['cart-items']}>
      {[
        { id: 'c1', name: 'Sushi', amount: 2, price: 12.99 },
        { id: 'c2', name: 'Pizza', amount: 1, price: 12.99 },
      ].map(item => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClick={onClick}>
      {dummyItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
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
