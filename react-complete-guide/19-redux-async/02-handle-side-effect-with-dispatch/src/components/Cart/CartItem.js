import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../../store/cart-slice';
import classes from './CartItem.module.css';

const CartItem = ({ id, title, price, total, quantity }) => {
  const dispatch = useDispatch();
  const handleItemAdd = () => dispatch(addItem({ id, title, price }));
  const handleItemRemove = () => dispatch(removeItem({ id }));

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleItemRemove}>-</button>
          <button onClick={handleItemAdd}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
