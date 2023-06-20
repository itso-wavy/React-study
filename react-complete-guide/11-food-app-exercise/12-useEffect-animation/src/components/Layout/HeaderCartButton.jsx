import { useContext, useState, useEffect } from 'react';

import classes from './HeaderCartButton.module.css';
import CartIcon from '../../assets/icons/CartIcon';
import CartContext from '../../store/cart-context';

const HeaderCartButton = ({ onClick }) => {
  const cartCtx = useContext(CartContext);
  const [animateBtn, setAnimateBtn] = useState(false);

  const numberOfCartItems = cartCtx.items.reduce(
    (acc, curItem) => acc + curItem.amount,
    0
  );

  const btnClasses = `${classes.button} ${animateBtn ? classes.bump : ''}`;
  useEffect(() => {
    if (cartCtx.items.length === 0) return;

    setAnimateBtn(true);
    const timer = setTimeout(() => {
      setAnimateBtn(false);
    }, 300);

    return () => clearTimeout(timer); // 콜백함수!
  }, [cartCtx.items]);

  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
