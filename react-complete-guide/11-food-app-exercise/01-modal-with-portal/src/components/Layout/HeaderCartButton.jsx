import CartIcon from '../../assets/icons/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = ({ onClick }) => {
  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>0</span>
      {/* bump??? */}
    </button>
  );
};

export default HeaderCartButton;
