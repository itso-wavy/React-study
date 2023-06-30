import { useSelector, useDispatch } from 'react-redux';
import { cartToggle } from '../../store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = () => {
  const total = useSelector(state => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const cartOpenHandler = () => dispatch(cartToggle());

  return (
    <button onClick={cartOpenHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{total}</span>
    </button>
  );
};

export default CartButton;
